const db = require("../data/db-config")



async function add(user) {
  await db("users").insert(user)
}

function findBy(filter) {
  return db("users").where(filter).orderBy("id");
}

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
  remove,
  add,
  findBy
  
}