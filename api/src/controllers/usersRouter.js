const bcrypt = require('bcrypt')
const { userExtractor } = require('../middleware')
const usersRouter = require('express').Router()
const UserModel = require('../models/userModel')
const { hasEmpty } = require('../utils/validators')

usersRouter.get('/', userExtractor, async (request, response) => {
  const users = await UserModel.find({})
  response.json(users)
})

usersRouter.get('/:id', (request, response, next) => {
  const { id } = request.params
  UserModel.findById(id)
    .then((user) => {
      if (user) response.json(user)
      else response.status(404).end()
    })
    .catch((err) => {
      console.log({ err })
      next(err)
    })
})

usersRouter.delete('/:id', userExtractor, async (request, response, next) => {
  const { id } = request.params
  try {
    await UserModel.findByIdAndRemove(id)
    response.status(204).end()
  } catch (err) {
    next(err)
  }
})

usersRouter.post('/', async (request, response, next) => {
  const { body } = request
  const { name, email, password } = body
  const saltRounds = 10
  if (hasEmpty([name, email, password])) {
    return response.sendStatus(400)
  }
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const newUser = new UserModel({
    name,
    email,
    password: passwordHash
  })
  try {
    const savedUser = await newUser.save()
    response.json(savedUser)
  } catch (err) {
    response.status(400).json({ error: err })
  }
})

module.exports = usersRouter
