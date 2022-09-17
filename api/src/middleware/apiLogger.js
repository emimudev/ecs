const { NODE_ENV, NodeEnvironments } = require('../env')

/**
 * Returns a middleware that prints information about an incoming HTTP
 * request, such as the method, route, and body, to the console.
 */
const apiLogger = () => {
  return (request, response, next) => {
    if (NODE_ENV !== NodeEnvironments.test) {
      console.log('Method: ', request.method)
      console.log('Path: ', request.path)
      console.log('Body: ', request.body)
      console.log('-----------------------')
    }
    next()
  }
}

module.exports = apiLogger
