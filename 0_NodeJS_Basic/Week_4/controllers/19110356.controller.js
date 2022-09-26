const { mygroup, teamGroup22 } = require('../models/mygroup.model');

const _19110356Controller = {
    get (req, res) {
        const student = mygroup.filter(value => value.id === req.params.id)
            if (mygroup.filter(e => e.id === req.params.id).length === 0) {
                res.status(404).json('Not valid')
            } else {
                res.status(200).json(student[0])
            }
    },

    post (req, res) {
        const newFriend = req.body
        if (mygroup.filter(e => e.id === newFriend.id).length > 0) {
            res.status(404).json('Not valid')
        } else {
            if (teamGroup22.filter(e => e.id === newFriend.id).length > 0) {
                mygroup.push(newFriend);
                res.status(200).json(mygroup)
            } else {
                res.status(404).json('Not valid') 
            }
        }
    }
};

module.exports = _19110356Controller