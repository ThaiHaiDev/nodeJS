const { Author } = require('../models/Author')
const { Book } = require('../models/Book')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const authorController = {
    // ADD AUTHOR
    addAuthor: async (req, res) => {
        try{
            res.json(req.body)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = authorController