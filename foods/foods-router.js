const express = require('express')
// Need to import the db and model here

const router = express.Router();

// [GET] - all the foods

router.get('/', (req, res) => {
    res.json({ message: 'Hello from foods'})
})

module.exports = router;