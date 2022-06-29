const express = require('express')
const router = express.Router()

const authorController = require('../app/controllers/authorController')

// Add Author
router.post('/v1/author', authorController.addAuthor)

module.exports = router