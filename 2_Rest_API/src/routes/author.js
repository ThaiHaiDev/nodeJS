const express = require('express')
const router = express.Router()

const authorController = require('../app/controllers/authorController')

// Add Author
router.post('/v1/author', authorController.addAuthor)

// Get All Author
router.get('/v1/author', authorController.getAllAuthor)

// Get An Author
router.get('/v1/author/:id', authorController.getAnAuthor)

// Update An Author
router.put('/v1/author/:id', authorController.updateAnAuthor)

// Delete An Author
router.delete('/v1/author/:id', authorController.deleteAnAuthor)

module.exports = router