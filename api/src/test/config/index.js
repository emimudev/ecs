const { app } = require('../../../index')
const { connect, close, clear } = require('./database')
const supertest = require('supertest')

const api = supertest(app)

module.exports = {
  api,
  connectDb: connect,
  closeDb: close,
  clearDb: clear
}
