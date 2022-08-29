const jwt = require('jsonwebtoken')

const userExtractor = (request, response, next) => {
  const authorization = request.get('authorization')

  let token = ''
  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }
  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.BCRYPT_SECRET)
  } catch (error) {
    console.log({ error })
    return next(error)
  }

  if (!token || !decodedToken.id) {
    return response.status(401).json({ error: 'Token missing or invalid' })
  }

  const { id: userId } = decodedToken
  request.userId = userId
  next()
}

module.exports = userExtractor
