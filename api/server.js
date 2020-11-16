const express = require('express');

const server = express();

const authenticate = require('../auth/auth-middleware')

const userRouter = require('../users/users-router');
const foodRouter = require('../foods/foods-router');
const eventRouter = require('../events/events-router');
const authRouter = require('../auth/register-router');


server.use(express.json())

server.use('/api/users', userRouter)
server.use('/api/foods',  authenticate, foodRouter)
server.use('/api/events', authenticate, eventRouter) // authenticate needs to be added back here
server.use('/api/auth', authenticate, authRouter)

// Need to remember to bring in the auth middleware and apply it to one or many routes.

server.get('/', (req, res) => {
    const messageOfTheDay = process.env.MOTD || 'Hello World'
    res.json({ motd: messageOfTheDay  })
})


module.exports = server;
