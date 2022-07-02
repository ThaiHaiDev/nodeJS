const authorRouter = require('./author')
const bookRouter = require('./book')

function route(app) {
    app.use('/', authorRouter)
    app.use('/', bookRouter)
}

module.exports = route