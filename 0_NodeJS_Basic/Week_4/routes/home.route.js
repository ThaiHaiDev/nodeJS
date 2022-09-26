const express = require('express')
const router = express.Router()

const HomeController = require('../controllers/index.controller')

router.get('/', HomeController.get)

module.exports = router