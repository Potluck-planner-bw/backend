const express = require('express')
// Need to import the db and model here

const router = express.Router();

// [GET] - all the users

router.get('/', (req, res) => {
    res.json({ message: 'Hello'})
})

module.exports = router;