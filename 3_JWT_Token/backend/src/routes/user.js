const express = require('express')
const router = express.Router()

const userController = require('../app/controller/userController')
const middlewareController = require('../app/controller/middlewareController')

// Get All Users 
router.get('/', middlewareController.verifyToken, userController.getAllUsers)

// Delete User 
router.delete('/:id', userController.deleteUser)

module.exports = router