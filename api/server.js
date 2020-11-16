const express = require('express');

const server = express();

const userRouter = require('../users/users-router');
const foodRouter = require('../foods/foods-router');
const eventRouter = require('../events/events-router');
const authRouter = require('../auth/register-router');


server.use(express.json())

server.use('/api/users', userRouter)
server.use('/api/foods', foodRouter)
server.use('/api/events', eventRouter)
server.use('/api/auth', authRouter)




module.exports = server;
