const mongoose = require('mongoose');
const { User } = require('../models/User');
const { Post } = require('../models/Post');

module.exports = {
  create: async (req, res) => {
    /*
      Opción 1: Generar una instancia con "new"
    */
    // const newUser = new User(req.body);
    // const response = await newUser.save();

    try {
      const newUser = await User.create(req.body);
      /**
       * Lo de arriba, sería equivalente a hacer:
       * const newUser = new User(req.body);
       * newUser.save();
       */
      res.status(201).json({ message: 'user created', user: newUser }); 
    } catch (error) {
      res.status(400).json({ message: 'error creating user', error });
    }
  },
  findAll: async (req, res) => {
    try {
      const users = await User.find({ is_active: true });
      if (users.length === 0) return res.status(404).json({ message: 'users not found' });
      res.status(200).json({ message: 'users list obtained', users });
    } catch (error) {
      res.status(400).json({ message: 'error fetching users', error });
    }
  },
  findOne: async (req, res) => {
    // const { idUser } = req.params;
    const id = req.params.idUser;
    try {
      const user = await User.findOne({ _id: id, is_active: true });
      if (!user) return res.status(404).json({ message: 'user not found' });
      return res.status(200).json({ message: 'user found', user }) 
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  updateOne: async (req, res) => {
    const id = req.params.idUser;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      return res.status(200).json({ message: 'user updated', user: updatedUser });
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  deleteOne: async (req, res) => {
    const id = req.params.idUser;
    try {
      await User.findByIdAndUpdate(id, { is_active: false }, { new: true });
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  destroyOne: async (req, res) => {
    const id = req.params.idUser;
    try {
      await User.findByIdAndRemove(id);
      return res.status(204).json();
    } catch (error) {
      return res.status(500).json({ error });
    }
  },
  /**
   * User Posts
   */
  createPost: async (req, res) => {
    const id = req.params.idUser;
    try {
      const user = await User.findOne({ _id: id, is_active: true });
      if (!user) return res.status(404).json({ message: 'user not found' });
      /**
       * Primero quiero crear una instancia de Post,
       * aprovechando el schema asociado al modelo.
       */
      const newPost = new Post(req.body);
      // newPost.save() // Si hacemos esto, el documento newPost se guarda en su propia colección
      user.posts.push(newPost);
      await user.save();

      const filteredPosts = user.posts.filter(post => post.is_active);
      user.posts = filteredPosts;

      res.status(201).json({ message: 'user post created', user}); 
    } catch (error) {
      res.status(400).json({ message: 'Error creating user post', error });
    }
  },
  findAllPosts: async (req, res) => {
    const id = req.params.idUser;
    try {
      const [user] = await User.aggregate([
        {
          '$match': {
            '_id': mongoose.Types.ObjectId(id), 
            'is_active': true
          }
        }, {
          '$unwind': {
            'path': '$posts'
          }
        }, {
          '$match': {
            'posts.is_active': true
          }
        }, {
          '$group': {
            '_id': '$_id', 
            'role': {
              '$first': '$role'
            }, 
            'profile_pic': {
              '$first': '$profile_pic'
            }, 
            'is_active': {
              '$first': '$is_active'
            }, 
            'first_name': {
              '$first': '$first_name'
            }, 
            'last_name': {
              '$first': '$last_name'
            }, 
            'email': {
              '$first': '$email'
            }, 
            'posts': {
              '$push': '$posts'
            }
          }
        }
      ]);
      if (!user) return res.status(404).json({ message: 'user not found' });
      const { posts } = user;

      res.status(200).json({ message: 'user posts found', posts });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Error finding user posts', error });
    }
  },
  findOnePost: async (req, res) => {
    const { idUser, idPost } = req.params;
    try {
      const user = await User.findOne({ _id: idUser, is_active: true });
      if (!user) return res.status(404).json({ message: 'user not found' });
      const post = user.posts.id(idPost);
      // const post = user.posts.find(post => post._id.toString() === idPost);
      if (!post || !post.is_active) return res.status(404).json({ message: 'post in user not found' });
      res.status(200).json({ message: 'user post found', post });
    } catch (error) {
      res.status(500).json({ message: 'Error finding user posts', error });
    }
  },
  updateOnePost: async (req, res) => {
    const { idUser, idPost } = req.params;
    try {
      const user = await User.findOne({ _id: idUser, is_active: true });
      if (!user) return res.status(404).json({ message: 'user not found' });
      // const post = user.posts.id(idPost);
      const post = user.posts.find(post => post._id.toString() === idPost);
      if (!post || !post.is_active) return res.status(404).json({ message: 'post in user not found' });
      
      post.set(req.body);
      await user.save();

      res.status(200).json({ message: 'user post updated', post });
    } catch (error) {
      res.status(500).json({ message: 'Error finding user posts', error });
    }
  },
  deleteOnePost: async (req, res) => {
    const { idUser, idPost } = req.params;
    try {
      const user = await User.findOne({ _id: idUser, is_active: true });
      if (!user) return res.status(404).json({ message: 'user not found' });
      // const post = user.posts.id(idPost);
      const post = user.posts.find(post => post._id.toString() === idPost);
      if (!post || !post.is_active) return res.status(404).json({ message: 'post in user not found' });
      
      post.set({ is_active: false });
      await user.save();

      res.status(204).json();
    } catch (error) {
      res.status(500).json({ message: 'Error finding user posts', error });
    }
  },
}