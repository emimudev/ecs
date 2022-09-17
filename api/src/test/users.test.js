const { api, connectDb, closeDb } = require('./config')
const { createAndLoginUserHelper, getAuthHeadersHelper } = require('./helpers/auth.helper')

let loginInfo = null

beforeAll(async () => {
  await connectDb()
  loginInfo = await createAndLoginUserHelper()
})

afterAll(async () => await closeDb())

test('Getting all users correctly', async () => {
  const { token } = loginInfo
  await api
    .get('/api/users')
    .expect(401)
  await api
    .get('/api/users')
    .set(getAuthHeadersHelper({ token }))
    .expect(200)
    .expect('Content-Type', /application\/json/)
})

test('Cannot create users with same email', async () => {
  const { user: userLogged } = loginInfo
  const newUser = {
    ...userLogged,
    password: 'newPassword'
  }
  await api
    .post('/api/users')
    .send(newUser)
    .expect(400)
})

test('Search user by id', async () => {
  const { user: userLogged, token } = loginInfo
  await api
    .get('/api/users/notFound')
    .set(getAuthHeadersHelper({ token }))
    .expect(404)

  await api
    .get(`/api/users/${userLogged.id}`)
    .set(getAuthHeadersHelper({ token }))
    .expect(200)
})
