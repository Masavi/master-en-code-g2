const User = require('../models/User');
const { Post } = require('../models/Post');

module.exports = {
  create: async (req, res) => {
    /*
      Opción 1: Generar una instancia con "new"
    */
    // const newUser = new User(req.body);
    // const response = await newUser.save();

    try {
      console.log(req.body)
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

      res.status(201).json({ message: 'user post created', user}); 
    } catch (error) {
      res.status(400).json({ message: 'Error creating user post', error });
    }
  },
}