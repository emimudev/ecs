const { closeDb, connectDb, api } = require('./config')
const {
  createUserHelper,
  DefaultUserHelper,
  loginHelper,
  getAuthHeadersHelper
} = require('./helpers/auth.helper')

const user = DefaultUserHelper

beforeAll(async () => {
  await connectDb()
  await createUserHelper()
})

afterAll(async () => await closeDb())

test('Users can login', async () => {
  const response = await loginHelper()
  expect(response.statusCode).toBe(200)
  expect(response.body.token).toBeTruthy()
})

test('Avoid login with wrong credentials', async () => {
  const response = await loginHelper({
    user: {
      email: user.email,
      password: 'wrong'
    }
  })
  expect(response.statusCode).toBe(401)
})

test('Verify session token', async () => {
  const loginResponse = await loginHelper()
  const { token } = loginResponse.body
  await api
    .get('/api/auth/verify')
    .set(getAuthHeadersHelper({ token }))
    .expect(200)
})
