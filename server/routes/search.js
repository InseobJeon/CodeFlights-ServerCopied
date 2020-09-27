const express = require('express')
const router = express.Router();
const searchControllers = require('../controllers/search/index')

router.get('/', searchControllers.searchDate.get)
// router.get('/article/:id',searchControllers.searchFlight)

module.exports = router;