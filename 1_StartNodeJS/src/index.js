// Install ExpressJS

const express = require('express')
const morgan = require('morgan')
const { engine } = require('express-handlebars')
const methodOverride = require('method-override')
const path = require('path')
const app = express()
const port = 3000

const route = require('./routes')
const db = require('./config/db')  // Connect data

app.use(express.static(path.join(__dirname, 'public')))

// HTTP logger
app.use(morgan('combined'))

// Connect Database
db.connect()

// Fix req.body
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

// Override PUT, POST, DELETE
app.use(methodOverride('_method'))

// Template engine
app.engine('hbs', engine({
  extname: '.hbs',
  helpers: {
    sum: (a, b) => a + b,
  }
}));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'))

// Routes init
route(app)

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})