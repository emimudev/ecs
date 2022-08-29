const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const loginRouter = require('express').Router()
const User = require('../models/userModel')

loginRouter.post('/', async (request, response) => {
  const { body } = request
  const { email, password } = body

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

  const token = jwt.sign(userForToken, process.env.BCRYPT_SECRET, {
    expiresIn: '7d'
  })

  response.send({
    name: user.name,
    email: user.email,
    token
  })
})

const isPasswordCorrect = async (password, user) => {
  return user === null
    ? false
    : await bcrypt.compare(password, user.password)
}

module.exports = loginRouter
