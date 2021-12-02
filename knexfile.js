// Update with your config settings.

module.exports = {
  development: {
    client: "pg",
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password: process.env.DB_PW,
      database: "pizzagram",
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    },
  },
  production: {
    client: "pg",
    connection: {
      host : process.env.DB_HOST,
      user : process.env.DB_USER,
      password: process.env.DB_PW,
      database: "pizzagram",
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
