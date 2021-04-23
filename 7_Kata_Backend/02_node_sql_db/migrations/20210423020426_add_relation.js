
exports.up = function(knex) {
  // Dentro del siguiente callback, podemos manipular la tabla 'rentals'
  return knex.schema.table('rentals', (table) => {

    // Así podemos renombrar columnas
    table.renameColumn('description', 'details');

    // Así podemos agregar columnas nuevas
    table.integer('fk_user').unsigned().references('users.user_id');
  });
};

exports.down = function(knex) {
  
};
