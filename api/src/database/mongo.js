const mongoose = require('mongoose')
const {
  NODE_ENV,
  NodeEnvironments,
  MONGO_DB_URI,
  MONGO_DB_URI_DEV,
  MONGO_DB_URI_TEST
} = require('../env')

function getConnectionString() {
  switch (NODE_ENV) {
    case NodeEnvironments.production: return MONGO_DB_URI
    case NodeEnvironments.development: return MONGO_DB_URI_DEV
    case NodeEnvironments.test: return MONGO_DB_URI_TEST
    default: throw new Error(`The environment variable 
    NODE_ENV must have a correct value`)
  }
}

function startUpDatabase() {
  if (NODE_ENV === NodeEnvironments.test) {
    return null
  }
  return mongoose
    .connect(getConnectionString())
    .then(() => {
      console.log('Database connected')
    })
    .catch((err) => {
      console.log(err)
    })
}

function disconnectDatabase() {
  return mongoose.disconnect()
}

process.on('uncaughtException', (errorInfo) => {
  console.log({ uncaughtException: errorInfo })
  console.log('Mongoose disconnected on uncaughtException')
  disconnectDatabase()
})

process.on('SIGINT', () => {
  console.log('Mongoose disconnected on app termination')
  disconnectDatabase()
})

startUpDatabase()

module.exports = {
  startUpDatabase,
  getConnectionString,
  disconnectDatabase
}
