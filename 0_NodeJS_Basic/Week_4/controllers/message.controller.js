const { mygroup, teamGroup22 } = require('../models/mygroup.model');

const MessageController = {
    getAll (req, res) {
        res.json(mygroup);
    },
    get (req, res) {
        res.statusCode = 200;
            res.setHeader('Content-Type', 'text/html');
            if (req.params.id === '') {
                res.status(200).json(mygroup)
            } else {
                const student = mygroup.filter(value => value.id === req.params.id)
                if(student.length !== 0) {
                    res.send(`<html><body><ul><li>${student[0].name}</li></ul></body></html>`)
                } else {
                    res.send(`<html><body>Not valid</body></html>`)
                }
            }
    },

};

module.exports = MessageController