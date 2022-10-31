require('./src/env')
require('./src/database/mongo')
require('./src/services/Cloudinary')
const middleware = require('./src/middleware')
const { startupServer } = require('./src/startupServer')
const routers = require('./src/controllers')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json({ limit: '100mb' }))
app.use(express.urlencoded({ extended: true, limit: '100mb' }))
app.use(middleware.apiLogger())
app.use(express.static('../app/build'))

app.use('/api/auth', routers.authRouter)
app.use('/api/users', routers.usersRouter)
app.use('/api/posts/cars', routers.carPostsRouter)

app.use('/*', express.static('../app/build'))
app.use(middleware.handleErrors())

startupServer(app)

module.exports = {
  app
}
