const { model, Schema } = require('mongoose')
const toJsonTransform = require('../utils/toJsonTransform')

const UserSchema = new Schema({
  name: String,
  lastname: String,
  email: {
    type: String,
    unique: true
  },
  password: String
})

toJsonTransform(UserSchema, ['password'])

const UserModel = model('User', UserSchema)

module.exports = UserModel
