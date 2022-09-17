const mongoose = require('mongoose')
const { MongoMemoryServer } = require('mongodb-memory-server')

// eslint-disable-next-line
let connection = null
let mongoServer = null

const connect = async () => {
  // This will create an new instance of "MongoMemoryServer" and automatically start it
  mongoServer = await MongoMemoryServer.create()
  connection = await mongoose.connect(mongoServer.getUri(), {})
}

const close = async () => {
  await mongoose.connection.dropDatabase()
  await mongoose.connection.close()
  await mongoServer.stop()
}

const clear = async () => {
  const collections = mongoose.connection.collections
  for (const key in collections) {
    await collections[key].deleteMany({})
  }
}

module.exports = { connect, close, clear }
