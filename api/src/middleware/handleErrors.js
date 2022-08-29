const ERROR_HANDLERS = {
  CastError: (res, error) => res.status(400).json({ error }),

  ValidationError: (res, err) => res.status(409).json({ error: err.message }),

  JsonWebTokenError: (res) => res.status(401).json({ error: 'Token missing or invalid' }),

  TokenExpiredError: (res) => res.status(401).json({ error: 'Token expired' }),

  NotBeforeError: (res) => res.status(401).json({ error: 'Token not active' }),

  DefaultError: (res) => res.status(500).end()
}

/**
 * Middleware to handle errors. It responds with a status code and an error object.
 * @see https://mongoosejs.com/docs/api/error.html
 * @see https://github.com/auth0/node-jsonwebtoken#errors--codes
 */
function handleErrors() {
  return (error, request, response, next) => {
    console.log(error.name)
    const handler = ERROR_HANDLERS[error.name] || ERROR_HANDLERS.DefaultError
    handler(response, error)
  }
}

module.exports = handleErrors
