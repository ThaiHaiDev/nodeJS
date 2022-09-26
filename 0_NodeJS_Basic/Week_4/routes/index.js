const homeRouter = require('./home.route');
const _19110356Router = require('./19110356.route');
const messageRouter = require('./message.route');
const logMiddleware = require('../middleware/log.middleware')

function route(app) {
    app.use('/', logMiddleware , homeRouter)
    app.use('/19110356', logMiddleware , _19110356Router)
    app.use('/message', logMiddleware , messageRouter)
}

module.exports = route