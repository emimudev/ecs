require('./src/env')
require('./src/database/mongo')
const express = require('express')
const middleware = require('./src/middleware')
const { startupServer } = require('./src/startupServer')
const { loginRouter, usersRouter } = require('./src/controllers')

const app = express()

app.use(express.json())
app.use(middleware.apiLogger())
app.use(express.static('../app/build'))

app.use('/api/login', loginRouter)
app.use('/api/users', usersRouter)

app.use(middleware.handleErrors())

startupServer(app)
