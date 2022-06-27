const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

const port = 3000
const db = require('./config/db')  // Connect data
const authorRouter = require('./routes/author')

// Fix req.body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/v1/author', authorRouter)

// Connect Database
db.connect()


app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))


app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})