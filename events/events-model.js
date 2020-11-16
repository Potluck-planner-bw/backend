const db = require('../data/db-config')

function find() {
    return db('events')
}

function findByID(id) {
    return db('events')
        .where({ id })
}

function update(id, change) {
    return db("events")
    .where({ id })
    .update(change)
}


function add(event) {
    return db('events')
        .insert(event, 'id')
        .then(ids => {
            return findByID([ids])
        })
}

function remove(id) {
    return db('events')
    .where({ id })
    .first()
    .truncate();
  }

module.exports = { 
    find,
    findByID,
    update,
    add,
    remove,
}