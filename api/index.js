require('./src/env')
require('./src/database/mongo')
const express = require('express')
const middleware = require('./src/middleware')
const { startupServer } = require('./src/startupServer')
const { authRouter, usersRouter } = require('./src/controllers')

const app = express()

app.use(express.json())
app.use(middleware.apiLogger())
app.use(express.static('../app/build'))

app.use('/api/auth', authRouter)
app.use('/api/users', usersRouter)

app.use(middleware.handleErrors())

startupServer(app)
