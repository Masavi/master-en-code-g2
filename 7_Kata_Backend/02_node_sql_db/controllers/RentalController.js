const { Rental } = require('../models');

const create = (req, res) => {
  // const newRental = req.body;
  const newRental = {
    title: req.body.title,
    address: req.body.address,
    guests: req.body.guests,
    description: req.body.description,
  }

  // utilizando knex, insertar el objeto en la base datos
  return Rental
    .create(newRental)
    .then((resDB) => {
      return res.status(200).json({
        message: 'rental created',
        rental: resDB,
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
    const response = await Rental.findAll(); 

    return res.status(200).json({
      message: 'Successfully obtained list of rentals',
      response,
    });
  } catch (error) {
    return res.status(500).json({
      message: 'Error obtaining list of rentals',
      error,
    });
  }
}

const findOneById = async (req, res) => {
  const { idRental } = req.params;

  try {
    const response = await Rental.findOneByIdWithUser(idRental);
    if (response.length === 0) return res.status(404).json({ message: "provided rental doesn't exist" });
    return res.status(200).json({
      message: 'Successfully obtained rental by id',
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
  const { idRental } = req.params;

  try {
    const response = await Rental.updateOneById(idRental, req.body);
    return res.status(200).json({
      message: 'Successfully updated rental by id',
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
  const { idRental } = req.params;

  try {
    await Rental.deleteOneById(idRental);
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