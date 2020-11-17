const express = require('express')
// Need to import the db and model here
const Events = require('../events/events-model');
const db = require('../data/db-config');

const router = express.Router();

// [GET] - all the events - http://localhost:3000/api/events

router.get('/', (req, res) => {
    Events.find()
    .then(event => {
        res.status(200).json(event)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'Could not get the event'})
    })
})

// [GET] - an event by ID - http://localhost:3000/api/events/1
router.get('/:id', (req, res) => {
    Events.findByID(req.params.id)
    .then(event => {
        if(event) {
            res.status(200).json(event)
        } else {
            res.status(404).json({ message: 'The event with the specified ID does not exist.'  })
        }
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'Could not get a event with that ID'})
    })
})

// [PUT] - edit an event
router.put('/:id', (req, res) => {
    const id = req.params.id
    const change = req.body
    Events.update(id, change)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'The event could not be updated'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: 'Something went bad'})
        })
})

// [POST] - an event - http://localhost:3000/api/events/
router.post('/', (req, res) => {
    const body = req.body;

    if(!body) {
        res.status(404).json({ error: "Bad Request" })
    } else {
        Events.add(body)
            .then(event => {
                res.status(200).json({ message: 'event created', event})
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: 'Internal'})
            })
    }
})

// [DEL] - an event by ID - http://localhost:3000/api/events/2
router.delete('/:id', (req, res) => {
    
  Events.remove(req.params.id)
      .then(count => {
          if(count > 0) {
            res.status(200).json({ message: 'The event has been deleted' }); 
          } else {
            res.status(404).json({ message: 'The event could not be found' });
          }
      })
      .catch(error => {
          console.log(error)
          res.status(500).json({ error: error.message })
      })
})


module.exports = router;