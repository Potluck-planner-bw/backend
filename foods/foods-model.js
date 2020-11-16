const db = require('../data/db-config')


function find() {
    return db('foods')
}

function add(food) {
    return db('foods')
        .insert(food, 'id')
        .then(ids => {
            return findByID([ids])
        })
}


function findByID(id) {
    return db('foods')
        .where({ id })
}

  function update(id, change) {
    return db("foods")
    .where({ id })
    .update(change)
}

function remove(id) {
    return db('foods')
    .where({ id })
    .del();
  }

module.exports = {
    find,
    findByID,
    add,
    update,
    remove
}