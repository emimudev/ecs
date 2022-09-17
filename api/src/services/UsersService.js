const bcrypt = require('bcrypt')
const UserModel = require('../models/userModel')

async function create(user) {
  const { name, lastname, email, password } = user
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)
  const newUser = new UserModel({
    name,
    lastname,
    email,
    password: passwordHash
  })
  return await newUser.save()
}

async function getById({ userId }) {
  return await UserModel.findById(userId)
}

async function getByEmail({ email }) {
  return await UserModel.findOne({ email })
}

async function getAll() {
  return await UserModel.find({})
}

async function remove({ userId }) {
  return await UserModel.findByIdAndRemove(userId)
}

const UsersService = {
  create,
  getAll,
  getById,
  getByEmail,
  remove
}

module.exports = { UsersService }
