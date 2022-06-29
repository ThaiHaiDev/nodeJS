const authorRouter = require('./author')

function route(app) {
    app.use('/', authorRouter)
}

module.exports = route