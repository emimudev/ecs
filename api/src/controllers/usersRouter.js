const { userExtractor } = require('../middleware')
const usersRouter = require('express').Router()
const UserModel = require('../models/userModel')
const { UsersService } = require('../services/UsersService')
const { hasEmpty } = require('../utils/validators')
const { isDuplicated } = require('./utils')

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
  const user = { name, lastname, email, password }
  if (hasEmpty([name, email, password])) {
    return response.sendStatus(406)
  }
  try {
    const savedUser = await UsersService.create(user)
    response.json(savedUser)
  } catch (error) {
    if (isDuplicated(error)) {
      response.status(400).json({ error: 'El correo ya se encuentra registrado' })
    } else {
      next(error)
    }
  }
})

module.exports = usersRouter
