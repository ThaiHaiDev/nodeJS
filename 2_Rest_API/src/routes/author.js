const express = require('express')
const authorController = require('../app/controllers/authorController')
const router = express.Router()

// Add Author
router.post('/', authorController.addAuthor)

module.exports = router