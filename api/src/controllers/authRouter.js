const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { BCRYPT_SECRET } = require('../env')
const { userExtractor } = require('../middleware')
const { UsersService } = require('../services/UsersService')
const authRouter = require('express').Router()

const TOKEN_EXPIRATION_TIME = '7d'

authRouter.post('/login', async (request, response) => {
  const { body } = request
  const { username: email, password } = body

  const user = await UsersService.getByEmail({ email })
  const passwordCorrect = await isPasswordCorrect(password, user)

  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: 'Invalid user or password'
    })
  }

  const userForToken = {
    id: user._id,
    username: user.email
  }

  const token = jwt.sign(userForToken, BCRYPT_SECRET, {
    expiresIn: TOKEN_EXPIRATION_TIME
  })

  response.send({
    user,
    token
  })
})

authRouter.get('/verify', userExtractor, async (request, response) => {
  const { body } = request
  const { _userId, _sessionToken } = body

  const user = await UsersService.getById({ userId: _userId })

  if (!user) {
    return response.status(400).json({
      error: 'Invalid request'
    })
  }

  response.send({
    user,
    token: _sessionToken
  })
})

const isPasswordCorrect = async (password, user) => {
  return user === null
    ? false
    : await bcrypt.compare(password, user.password)
}

module.exports = authRouter
