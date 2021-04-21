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

module.exports = {
  create,
}