const Author = require('../models/Author')
const { Book } = require('../models/Book')
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()

const authorController = {
    // ADD AUTHOR
    async addAuthor(req, res) {
        try{
            const formData = req.body
            const newAuthor = new Author(formData)
            const saveAuthor = await newAuthor.save()
            res.status(200).json(saveAuthor)
        }catch(err) {
            res.status(500).json(err)
        }
    }
}

module.exports = authorController