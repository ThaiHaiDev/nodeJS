const Author = require('../models/Author')
const Book = require('../models/Book')

const bookController = {
    // ADD A BOOK
    async addABook(req, res) {
        try{
            const newBook = new Book(req.body)
            const saveBook = await newBook.save()
            if(req.body.author) {
                const author = Author.findById(req.body.author)
                await author.updateOne({ $push: { books: saveBook._id } })
            }
            res.status(200).json(saveBook)
        }catch(err) {
            res.status(500).json(err)
        }
    },

    // GET ALL BOOKS
    async getAllBook(req, res) {
        try {
            const books = await Book.find()
            res.status(200).json(books)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // GET A BOOK
    async getABook(req, res) {
        try {
            const book = await Book.findById(req.params.id).populate("author")
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // UPDATE A BOOK
    async updateABook(req, res) {
        try {
            const book = await Book.updateOne({ _id: req.params.id }, req.body) 
            res.status(200).json(book)
        } catch (error) {
            res.status(500).json(error)
        }
    },

    // DELETE A BOOK
    async deleteABook(req, res) {
        try {
            await Author.updateMany(
                // { books: req.params.id },  // Những cuốn sách có id này trong Bảng Author trường books 
                { $pull: { books: req.params.id }}  // Lấy ra khỏi array (xóa) những cuốn sách có id trùng đó
            )
            await Book.findByIdAndDelete(req.params.id)
            res.status(200).json("Delete Successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }

}

module.exports = bookController