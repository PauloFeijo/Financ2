module.exports = {
    client: 'postgresql',
    connection: {
      database: 'financ2',
      user: 'postgres',
      password: 'postgres'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  };
  