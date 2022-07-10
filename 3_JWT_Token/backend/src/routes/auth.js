const express = require('express')
const router = express.Router()

const authController = require('../app/controller/authController')
const middlewareController = require('../app/controller/middlewareController')

// Register User
router.post('/register', authController.registerUser)

// Login User
router.post('/login', authController.loginUser)

// Refresh Token
router.post('/refresh', authController.requestRefreshToken)

// logout
router.post('/logout', middlewareController.verifyToken, authController.userLogout)

module.exports = router