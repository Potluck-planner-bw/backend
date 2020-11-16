const express = require('express');
const db = require('../data/db-config');
const Users = require('./users-model');
// Need to import the db and model here

const router = express.Router();

// [GET] - all the users - http://localhost:3000/api/users/
router.get('/', (req, res) => {
    Users.find()
    .then(user => {
        res.status(200).json(user)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'Could not get the users'})
    })
})

// [GET] - a user by id - http://localhost:3000/api/users/1
router.get('/:id', (req, res) => {
    Users.findByID(req.params.id)
    .then(user => {
        if(user) {
            res.status(200).json(user)
        } else {
            res.status(404).json({ message: 'The user with the specified ID does not exist.'  })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'Could not get a user with that ID'})
    })
})

// [PUT] - To edit a username - http://localhost:3000/api/users/1
router.put('/:id', (req, res) => {
    if(!req.body.username) {
        return res.status(400).json({ message: 'Please update the username field' })
    }
    const changes = req.body;
    Users.update(req.params.id, changes)
        .then(data => {
            if(data) {
                res.status(200).json(data) 
            } else {
                res.status(404).json({
                    message: "The user with the specified ID does not exist." 
                })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                error: "The user information could not be modified." 
            })
        })
})
// [DEL] - delete a user - http://localhost:3000/api/users/1
router.delete('/:id', (req, res) => {
    Users.remove(req.params.id)
    .then(count => {
        if(count > 0) {
          res.status(200).json({ message: 'The user has been deleted' }); 
        } else {
          res.status(404).json({ message: 'The food item could not be found' });
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: error.message })
    })
  })
// [GET] - a user and the events
  router.get('/:id/events', (req, res) => {
      const { id } = req.params;
      db('users')
        .where({ id })
        .then(user => {
            db('events')
                .where({ users_id: id })
                .then(events => {
                    res.status(200).json({ ...user[0], events })
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({ error: 'Internal server error one' }) 
                })
                .catch(error => {
                    console.log(error)
                    res.status(500).json({ error: "Internal server error two" })
                })
        })
      
  })



module.exports = router;