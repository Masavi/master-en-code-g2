const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'rentals';
const TABLE_COLUMNS = [
  'rental_id',
  'title',
  'address',
  'guests',
  'details',
  'is_active',
  'created_at'
];
const TABLE_ID = 'rental_id';

const Rental = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

Rental.findOneByIdWithUser = (idRental) => {
  return knex
    .select(['users.user_id', 'users.email', 'rentals.title', 'rentals.rental_id'])
    .from(TABLE)
    .join('users', 'users.user_id', '=', 'rentals.fk_user')
    .where({ [TABLE_ID]: idRental })
}

module.exports = Rental;