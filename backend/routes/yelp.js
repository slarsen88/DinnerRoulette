const express = require('express')
const router = express.Router()

const { getAllRestaurants } = require('../controllers/yelp')

router.route('/').get(getAllRestaurants)

module.exports = router
