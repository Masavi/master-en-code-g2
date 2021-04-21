const create = (req, res) => {
  // const newRental = req.body;
  const newRental = {
    title: '',
    address: '',
    guests: 0,
    description: '',
  }

  // utilizando knex, insertar el objeto en la base datos

  // responder al usuario lo que nos reponsa la base de datos
  return res.status(200).json({
    message: 'rental created',
    rental: newRental,
  })
}

module.exports = {
  create,
}