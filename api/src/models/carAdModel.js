const { model, Schema } = require('mongoose')
const toJsonTransform = require('../utils/toJsonTransform')
const { CarSchema } = require('./carModel')
const { SellerSchema } = require('./sellerModel')

const CarAdSchema = new Schema({
  seller: SellerSchema,
  car: CarSchema,
  province: String,
  discountPercentage: Number,
  publishedDate: Schema.Types.Date,
  pricing: Number,
  duration: Number,
  expiredDate: Schema.Types.Date,
  maxFiles: Number,
  files: [Object]
})

toJsonTransform(CarAdSchema)

const CarAdModel = model('CardAd', CarAdSchema)

module.exports = {
  CarAdSchema,
  CarAdModel
}
