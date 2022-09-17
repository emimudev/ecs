const jwt = require('jsonwebtoken')
const { BCRYPT_SECRET } = require('../env')

/**
 * Verify that the authentication token exists and set the userId and sessionToken in the request object.
 */
const userExtractor = (request, response, next) => {
  const authorization = request.get('authorization')

  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, BCRYPT_SECRET)
  } catch (error) {
    console.log({ error })
    return next(error)
  }

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  const { id: userId } = decodedToken
  request.body._userId = userId
  request.body._sessionToken = token
  next()
}

module.exports = userExtractor
