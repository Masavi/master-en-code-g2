
exports.up = function(knex) {
  // Crea una tabla con el nombre del primer argumento, si es que no existe esa tabla
  return knex.schema.createTableIfNotExists('rentals', (table) => {
    // Dentro del callback, definimos a nuestra tabla
    table.increments('rental_id').primary();
    // table.tipo_de_dato('nombre_de_columna').atributos_de_columna
    table.string('title').notNullable();
    table.string('address').notNullable();
    table.integer('guests').notNullable();
    table.text('description');
    // is_active -> borrado lógico
    table.boolean('is_active').notNullable().defaultTo(true);
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('rentals');
};
