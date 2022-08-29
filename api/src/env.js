require('dotenv').config()

const {
  PORT,
  NODE_ENV,
  MONGO_DB_URI,
  MONGO_DB_URI_DEV,
  MONGO_DB_URI_TEST,
  BCRYPT_SECRET
} = process.env

/**
 * Enumeration of Node environments
 * @enum {string}
 */
const NodeEnvironments = {
  production: 'production',
  development: 'development',
  test: 'test'
}

module.exports = {
  PORT,
  NODE_ENV,
  NodeEnvironments,
  MONGO_DB_URI,
  MONGO_DB_URI_DEV,
  MONGO_DB_URI_TEST,
  BCRYPT_SECRET
}
