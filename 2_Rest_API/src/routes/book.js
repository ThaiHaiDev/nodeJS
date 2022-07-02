const express = require('express')
const router = express.Router()

const bookController = require('../app/controllers/bookController')

// Add A Book
router.post('/v1/book', bookController.addABook)

// Get All Book
router.get('/v1/book', bookController.getAllBook)

// Get All Book
router.get('/v1/book/:id', bookController.getABook)

// Update A Book
router.put('/v1/book/:id', bookController.updateABook)

// Delete A Book
router.delete('/v1/book/:id', bookController.deleteABook)

module.exports = router