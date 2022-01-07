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
    connection: process.env.DB_HR_PG_URL || {
      host : process.env.DB_HR_PG_HOST,
      user : process.env.DB_HR_PG_USER,
      password: process.env.DB_HR_PG_PW,
      database: process.env.DB_HR_PG_NAME,
    },
    migrations: {
      directory: __dirname + '/db/migrations',
    },
    seeds: {
      directory: __dirname + '/db/seeds'
    }
  }
};
