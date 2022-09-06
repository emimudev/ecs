const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const { BCRYPT_SECRET } = require('../env')
const signinRouter = require('express').Router()
const User = require('../models/userModel')
const { userExtractor } = require('../middleware')

signinRouter.post('/login', async (request, response) => {
  const { body } = request
  const { username: email, password } = body

  const user = await User.findOne({ email })
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
    expiresIn: '7d'
  })

  response.send({
    user: {
      name: user.name,
      lastname: user.lastname,
      email: user.email
    },
    token
  })
})

signinRouter.get('/verify', userExtractor, async (request, response) => {
  const { body } = request
  const { _userId } = body

  const user = await User.findById(_userId)

  if (!user) {
    return response.status(400).json({
      error: 'Invalid request'
    })
  }

  const userForToken = {
    id: user._id,
    username: user.email
  }

  const token = jwt.sign(userForToken, BCRYPT_SECRET, {
    expiresIn: '7d'
  })

  response.send({
    user: {
      name: user.name,
      lastname: user.lastname,
      email: user.email
    },
    token
  })
})

const isPasswordCorrect = async (password, user) => {
  return user === null
    ? false
    : await bcrypt.compare(password, user.password)
}

module.exports = signinRouter
