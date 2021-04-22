const knex = require('../config');

const create = (bodyRental) => {
  return knex('rentals').insert(bodyRental);
}

const findAll = () => {
  return knex
    .select(['rental_id', 'title', 'address', 'guests', 'description', 'created_at'])
    .from('rentals');
}

module.exports = {
  create,
  findAll,
}