const knex = require('../config');

const create = (bodyRental) => {
  return knex('rentals').insert(bodyRental);
}

module.exports = {
  create,
}