const knex = require('../config');

const create = (bodyRental) => {
  return knex('rentals').insert(bodyRental);
}

const findAll = () => {
  return knex
    .select(['rental_id', 'title', 'address', 'guests', 'description', 'is_active', 'created_at'])
    .from('rentals');
}

const findOneById = (id) => {
  return knex
    .select(['rental_id', 'title', 'address', 'guests', 'description', 'is_active', 'created_at'])
    .from('rentals')
    .where({ rental_id: id });
}

const updateOneById = (id, updateBody) => {
  return knex
    .update(updateBody)
    .from('rentals')
    .where({ rental_id: id });
}

module.exports = {
  create,
  findAll,
  findOneById,
  updateOneById,
}