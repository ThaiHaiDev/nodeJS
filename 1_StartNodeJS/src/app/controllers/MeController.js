const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
var bodyParser = require('body-parser')


class MeController {
    // [GET] /me/store/courses
    store(req, res, next) {
        Course.find({})
            .then(courses => {
                res.render('me/show', {courses : mutipleMongooseToObject(courses)})
            })
            .catch(next)
    }
}

module.exports = new MeController