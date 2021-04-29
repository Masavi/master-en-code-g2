// Update with your config settings.

module.exports = {
  // Contiene datos de prueba para hacer todo tipo de experimentos
  development: {
    client: 'postgresql',
    connection: {
      host:     process.env.DEV_HOST,
      database: process.env.DEV_DB,
      user:     process.env.DEV_USER,
      password: process.env.DEV_PASS,
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // Contiene una copia exacta (o tan exacta como se necesite) de producción
  staging: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'ynrawqbl',
      user:     'ynrawqbl',
      password: 'wdK_eX3tlrJQtzyQpw81uHmE9ljaLp5-'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  // Los datos reales de tu negocio: los datos en producción
  production: {
    client: 'postgresql',
    connection: {
      host: 'queenie.db.elephantsql.com',
      database: 'ynrawqbl',
      user:     'ynrawqbl',
      password: 'wdK_eX3tlrJQtzyQpw81uHmE9ljaLp5-'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};