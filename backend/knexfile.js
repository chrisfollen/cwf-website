// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgres:///journal'
    }
  },

  // production: {
  //   client: 'pg',
  //   connection: {
  //     database: 'my_db',
  //     connection: process.env.DATABASE_URL
  //   }
  // }

};
