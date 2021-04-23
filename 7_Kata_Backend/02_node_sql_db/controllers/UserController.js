const { User } = require('../models');

const create = (req, res) => {
  // const newUser = req.body;
  const newUser = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    email: req.body.email,
    phone: req.body.phone,
    biography: req.body.biography,
  }

  // utilizando knex, insertar el objeto en la base datos
  return User
    .create(newUser)
    .then((resDB) => {
      return res.status(200).json({
        message: 'user created',
        user: resDB,
      })
    })
    .catch((err) => {
      res.status(400).json({
        message: err,
      })
    })
}

const findAll = async (req, res) => {
  try {
    const response = await User.findAll(); 

    return res.status(200).json({
      message: 'Successfully obtained list of users',
      response,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error obtaining list of users',
      error,
    });
  }
}

const findOneById = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await User.findOneById(idUser);
    if (response.length === 0) return res.status(404).json({ message: "provided user doesn't exist" });
    return res.status(200).json({
      message: 'Successfully obtained user by id',
      response,
    });
    
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
}

const updateOneById = async (req, res) => {
  const { idUser } = req.params;

  try {
    const response = await User.updateOneById(idUser, req.body);
    return res.status(200).json({
      message: 'Successfully updated user by id',
      response,
    });
    
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
}

const deleteOneById = async (req, res) => {
  const { idUser } = req.params;

  try {
    await User.deleteOneById(idUser);
    return res.status(204).json();
    
  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
  deleteOneById,
}