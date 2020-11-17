
exports.up = function(knex) {
  return knex.schema.createTable('users', tbl => {
      tbl.increments()

      tbl.string('username', 100).notNullable().unique()
      tbl.string('password', 100).notNullable()
  })
.createTable('events', tbl => {
    tbl.increments()

    tbl.string('event_name', 200).notNullable()
    tbl.string('time', 200).notNullable()
    tbl.string('address', 200).notNullable()
    tbl.string('dates', 200).notNullable()
    tbl.string('guests', 200).notNullable()
    tbl.string('description', 300)
    tbl.boolean('created', 200).notNullable()
    tbl.integer('users_id', 200)
    
})
.createTable('foods', tbl => {
    tbl.increments()

    tbl.string('food_item', 200).notNullable()
    tbl.integer('events_id', 200).notNullable()
    tbl.boolean('completed', 200).notNullable()

})
};

exports.down = function(knex) {
  return knex.schema 
    .dropTableIfExists('foods')
    .dropTableIfExists('events')
    .dropTableIfExists('users')

};
