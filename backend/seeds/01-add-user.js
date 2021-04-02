const bcrypt = require('bcrypt')

exports.seed = function(knex) {
  return knex('users').del()
    .then(async function () {
      const hashed_password = await bcrypt.hashSync(process.env.PASSWORD, 12)
      return knex('users').insert({
        username: process.env.USERNAME,
        password_hash: hashed_password
      });
    });
};
