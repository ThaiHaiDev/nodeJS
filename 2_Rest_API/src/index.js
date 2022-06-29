const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const dotenv = require('dotenv');

const port = 3000
const db = require('./config/db')  // Connect data
const route = require('./routes')

// Fix req.body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect Database
db.connect()

app.use(bodyParser.json({limit:"50mb"}))
app.use(cors())
app.use(morgan("common"))

// Routes init
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})