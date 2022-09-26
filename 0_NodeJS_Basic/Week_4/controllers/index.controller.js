const { mygroup } = require('../models/mygroup.model');

const HomeController = {
    get (req, res) {
        res.json(mygroup);
    },
};

module.exports = HomeController