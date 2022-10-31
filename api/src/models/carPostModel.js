const { model, Schema } = require('mongoose')
const toJsonTransform = require('../utils/toJsonTransform')
const { CarSchema } = require('./carModel')
const { SellerSchema } = require('./sellerModel')

const CarPostSchema = new Schema({
  publishedBy: Schema.Types.ObjectId,
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

toJsonTransform(CarPostSchema)

const CarPostModel = model('CarPost', CarPostSchema)

module.exports = {
  CarPostSchema,
  CarPostModel
}
