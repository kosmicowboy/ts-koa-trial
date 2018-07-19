
exports.up = function (knex, Promise) {
  return knex.schema.createTable('videos', (table) => {
    table.increments('id')
    table.uuid('guid').notNullable()
  })
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('videos')
}
