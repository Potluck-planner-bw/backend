const express = require('express');
const db = require('../data/db-config');
// Need to import the db and model here

const Food = require('../foods/foods-model');

const router = express.Router();

// [GET] - all the foods - http://localhost:3000/api/foods

router.get('/', (req, res) => {
    Food.find()
    .then(food => {
        res.status(200).json(food)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({ error: 'Could not get the food item'})
    })
})

// [POST] - all the foods - http://localhost:3000/api/foods
router.post('/', (req, res) => {
    const body = req.body;

    if(!body) {
        res.status(404).json({ error: "Bad Request" })
    } else {
        Food.add(body)
            .then(event => {
                res.status(200).json({ message: 'food item created', event})
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ error: 'Internal'})
            })
    }
})

// [PUT] - edit/update the food items - http://localhost:3000/api/foods/:id
router.put('/:id', (req, res) => {
    const id = req.params.id
    const change = req.body
    Food.update(id, change)
        .then(data => {
            if(data) {
                res.status(200).json(data)
            } else {
                res.status(404).json({ message: 'The food item could not be updated'})
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: 'Something went bad'})
        })
})

// [DEL] - delete a food item - http://localhost:3000/api/foods/:id
router.delete('/:id', (req, res) => {
    const { id } = req.params;
  Food.remove(id)
      .then(deleted => {
          if(deleted) {
              res.status({ message: 'Food item has been deleted'})
          } else {
              res.status(500).json({ error: "Internal server error" })
          }
      })
      .catch(error => {
          console.log(error)
      })
})

// [GET] - Get an event with the food items - http://localhost:3000/api/foods/:id
router.get('/:id/events', (req, res) => {
    const { id } = req.params;

    db('events')
        .where({ id })
        .then(user => {
            db('foods')
            .where({ events_id: id })
            .then(food => {
                res.status(200).json({...user[0], food })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: 'Internal Servor Error'})
            })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: 'Internal Servor Error #2'})
        })
})

module.exports = router;