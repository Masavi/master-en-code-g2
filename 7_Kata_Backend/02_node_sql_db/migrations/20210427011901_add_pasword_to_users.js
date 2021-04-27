
exports.up = function(knex) {
  return knex.schema.table('users', (table) => {
    table.string('password').nullable();
    table.string('role').nullable();
  })
};

exports.down = function(knex) {
  
};
