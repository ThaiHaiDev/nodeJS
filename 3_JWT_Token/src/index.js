const express = require('express');
const cors = require('cors');
const app = express();
const mongoose = require('mongoose');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');

const port = 3000
const db = require('./config/db')  // Connect data
const route = require('./routes')

// Fix req.body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Connect Database
db.connect()

app.use(cors())
app.use(cookieParser())
app.use(express.json())


// Routes init
route(app)

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})
