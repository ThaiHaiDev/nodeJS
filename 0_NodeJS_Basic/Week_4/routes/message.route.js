const express = require('express')
const router = express.Router()

const MessageController = require('../controllers/message.controller')

router.get('/:id', MessageController.get)

router.get('/', MessageController.getAll)

module.exports = router