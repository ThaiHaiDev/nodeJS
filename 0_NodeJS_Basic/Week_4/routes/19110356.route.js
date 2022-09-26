const express = require('express')
const router = express.Router()

const _19110356Controller = require('../controllers/19110356.controller')

router.get('/:id', _19110356Controller.get)

router.post('/', _19110356Controller.post)

module.exports = router