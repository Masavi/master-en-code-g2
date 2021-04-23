const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'rentals';
const TABLE_COLUMNS = ['rental_id', 'title', 'address', 'guests', 'description', 'is_active', 'created_at'];
const TABLE_ID = 'rental_id';

const Rental = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

module.exports = Rental;