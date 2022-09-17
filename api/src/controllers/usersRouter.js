const bcrypt = require('bcrypt')
const { userExtractor } = require('../middleware')
const usersRouter = require('express').Router()
const UserModel = require('../models/userModel')
const { UsersService } = require('../services/UsersService')
const { hasEmpty } = require('../utils/validators')

usersRouter.get('/', userExtractor, async (request, response) => {
  const users = await UsersService.getAll()
  response.json(users)
})

usersRouter.get('/:id', async (request, response, next) => {
  const { id } = request.params
  try {
    const user = await UsersService.getById({ userId: id })
    if (user) response.json(user)
    else response.status(404).end()
  } catch (error) {
    next(error)
  }
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
  const { name, lastname, email, password } = body
  const saltRounds = 10
  if (hasEmpty([name, email, password])) {
    return response.sendStatus(400)
  }
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const newUser = new UserModel({
    name,
    lastname,
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
