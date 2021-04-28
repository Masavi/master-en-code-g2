const knex = require('../config');
const createKnexModel = require('../utils/createKnexModel');

const TABLE = 'users';
const TABLE_COLUMNS = ['user_id', 'first_name', 'last_name', 'email', 'phone', 'biography', 'is_active', 'created_at'];
const TABLE_ID = 'user_id';

const User = createKnexModel(knex, TABLE, TABLE_COLUMNS, TABLE_ID);

const findOneByEmail = (email) => {
  return knex.select(TABLE_COLUMNS).from(TABLE).where({ email: email })
}

// Esto es lo que debemos exportar al final
// const User = {
//   create,
//   findAll,
//   findOneById,
//   updateOneById,
//   deleteOneById,
// }

User.findOneByEmail = findOneByEmail;

module.exports = User;