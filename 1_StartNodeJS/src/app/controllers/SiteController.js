const Course = require('../models/Course')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class SiteController {
    // [GET] /
    index(req, res, next) {
        // res.render('home')
        // Course.find({}, function (err, courses) {
        //     if (!err) {
        //         res.json(courses)
        //     } else {
        //         res.status(400).json({ error: 'ERROR...'})
        //     }
        //   });

        Course.find({})
            .then(courses => {
                res.render('home', {courses : mutipleMongooseToObject(courses)})
            })
            .catch(next)
    }

    // [GET] /search
    search(req, res) {
        res.send("Site Detail")
    }
}

module.exports = new SiteController