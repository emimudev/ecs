const { UsersService } = require('../../services/UsersService')
const { api } = require('../config')

const DefaultUserCredentials = {
  email: 'admin@gmail.com',
  password: 'admin123'
}

const DefaultUserHelper = {
  email: DefaultUserCredentials.email,
  name: 'Admin',
  lastname: 'Admin',
  password: DefaultUserCredentials.password
}

const getAuthHeadersHelper = ({ token }) => ({
  Authorization: `Bearer ${token}`
})

async function loginHelper({ user = DefaultUserCredentials } = {}) {
  return await api
    .post('/api/auth/login')
    .send({
      username: user.email,
      password: user.password
    })
}

async function createUserHelper({ user = DefaultUserHelper } = {}) {
  const userCreated = await UsersService.create(user)
  return userCreated.toObject()
}

async function createAndLoginUserHelper({ user = DefaultUserHelper } = {}) {
  await createUserHelper({ user })
  const loginResponse = await loginHelper({ user })
  return loginResponse.body
}

module.exports = {
  DefaultUserHelper,
  loginHelper,
  createUserHelper,
  getAuthHeadersHelper,
  createAndLoginUserHelper
}
