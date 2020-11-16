const db = require("../data/db-config")


function find(users) {
  return db("users")
}

function findByID(id) {
  return db("users").where({ id })
}

function update(id, change) {
  return db('users')
  .where({ id })
  .update(change)
}

function remove(id) {
  return db('users')
  .where({ id })
  .first()
  .truncate();
}


module.exports = {
  find,
  findByID,
  update,
  remove
  
}