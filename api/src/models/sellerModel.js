const { model, Schema } = require('mongoose')
const toJsonTransform = require('../utils/toJsonTransform')

const SellerSchema = new Schema({
  name: String,
  email: String,
  mainPhone: String,
  secondaryPhone: String,
  whatsApp: String
})

toJsonTransform(SellerSchema)

const SellerModel = model('Seller', SellerSchema)

module.exports = {
  SellerSchema,
  SellerModel
}
