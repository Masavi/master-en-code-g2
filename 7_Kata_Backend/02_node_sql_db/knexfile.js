// Update with your config settings.

module.exports = {

  development: {
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
