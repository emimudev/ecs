const { model, Schema } = require('mongoose')
const toJsonTransform = require('../utils/toJsonTransform')

const CarSchema = new Schema({
  brand: String,
  model: String,
  style: String,
  year: String,
  status: String,
  price: Number,
  isNP: Boolean,
  outsideColor: String,
  insideColor: String,
  mileage: String,
  hasAlreadyPaidTaxes: Boolean,
  receiveVehicle: Boolean,
  licensePlate: String,
  doorsNumber: Number,
  equipment: [String]
})

toJsonTransform(CarSchema)

const CarModel = model('Car', CarSchema)

module.exports = {
  CarSchema,
  CarModel
}
