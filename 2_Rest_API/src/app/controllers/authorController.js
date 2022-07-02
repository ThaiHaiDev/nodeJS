const Author = require('../models/Author')
const Book = require('../models/Book')

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
    },

    // GET ALL AUTHOR
    async getAllAuthor(req, res) {
        try {
            const authors = await Author.find()
            res.status(200).json(authors)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET AN AUTHOR
    async getAnAuthor(req, res) {
        try {
           const author = await Author.findById(req.params.id).populate("books")
           res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE AN AUTHOR
    async updateAnAuthor(req, res) {
        try {
            const author = await Author.updateOne({ _id: req.params.id }, req.body) 
            res.status(200).json(author)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE AN AUTHOR
    async deleteAnAuthor(req, res) {
        try {
            await Book.updateMany(
                { author: req.params.id }, 
                { author: null } 
            )
            await Author.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete Successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
}

module.exports = authorController