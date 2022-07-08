const authRouter = require('./auth')
const userRouter = require('./user')

function route(app) {
    app.use('/', authRouter)
    app.use('/user', userRouter)
}

module.exports = route