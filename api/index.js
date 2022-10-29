require('./src/env')
require('./src/database/mongo')
const middleware = require('./src/middleware')
const { startupServer } = require('./src/startupServer')
const routers = require('./src/controllers')
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())
app.use(middleware.apiLogger())
app.use(express.static('../app/build'))

app.use('/api/auth', routers.authRouter)
app.use('/api/users', routers.usersRouter)
app.use('/api/posts/cars', routers.carAdsRouter)

app.use('/*', express.static('../app/build'))
app.use(middleware.handleErrors())

startupServer(app)

module.exports = {
  app
}
