const express = require('express')
// Need to import the db and model here

const Users = require('../users/users-model')

const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { jwtSecret } = require('./secrets');

const router = express.Router();


router.post('/register', async (req, res) => {
    // implement registration
    try {
      const { username, password } = req.body;
      const hash = bcrypt.hashSync(password, 10);
      const user = { username, password: hash }
      const addedUser = await Users.add(user)
      res.json(addedUser)
    } catch (err) {
      res.status(500).json({ message: err.message}) 
    }
  
  });

  router.post('/login', async (req, res) => {
    try {
        const [user] = await Users.findBy({ username: req.body.username })
        if(user && bcrypt.compareSync(req.body.password, user.password )) {
            const token = makeToken(user)
            res.json({ message: `Welcome back, ${user.username}`, token})
        } else {
            res.status(400).json({ message: 'bad credentials'})
        }
    } catch (err) {
        res.status(500).json({ message: err.message}) 
    }
  })

  
function makeToken(user) {
    const payload = {
        subject: user.id,
        username: user.username
    }
    const options = {
        expiresIn: '10 minutes'
    }
  
    return jwt.sign(payload, jwtSecret, options)
  }
  
  


module.exports = router;