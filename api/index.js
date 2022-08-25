require('dotenv').config()
const express = require('express')
const { startupServer } = require('./startupServer')

const app = express()

/*
 * Allows to serve the application from the root.
 * A build of the application must exist.
 */
app.use(express.static('../app/build'))

app.get('/', function (req, res) {
  res.send('Hello World')
})

startupServer(app)
