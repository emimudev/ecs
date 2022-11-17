const { model, Schema } = require('mongoose')
const toJsonTransform = require('../utils/toJsonTransform')
const { MotorcycleSchema } = require('./motorcycleModel')
const { SellerSchema } = require('./sellerModel')

const MotorcyclePostSchema = new Schema({
  publishedBy: Schema.Types.ObjectId,
  seller: SellerSchema,
  motorcycle: MotorcycleSchema,
  province: String,
  discountPercentage: Number,
  publishedDate: Schema.Types.Date,
  pricing: Number,
  duration: Number,
  expiredDate: Schema.Types.Date,
  maxFiles: Number,
  files: [Object]
})

toJsonTransform(MotorcyclePostSchema)

const MotorcyclePostModel = model('MotorCyclePost', MotorcyclePostSchema)

module.exports = {
  MotorcyclePostSchema,
  MotorcyclePostModel
}
