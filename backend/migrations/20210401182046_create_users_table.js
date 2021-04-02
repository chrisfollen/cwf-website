
exports.up = (knex) => {
  return knex.schema.createTable('users', (table) => {
      table.increments()
      table.string('username')
      table.string('password_hash')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('users')
};
