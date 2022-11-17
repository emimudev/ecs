const { model, Schema } = require('mongoose')
const toJsonTransform = require('../utils/toJsonTransform')

const MotorcycleSchema = new Schema({
  brand: String,
  model: String,
  style: String,
  year: String,
  status: String,
  price: Number,
  isNP: Boolean,
  outsideColor: String,
  mileage: String,
  hasAlreadyPaidTaxes: Boolean,
  receiveVehicle: Boolean,
  licensePlate: String,
  equipment: [String]
})

toJsonTransform(MotorcycleSchema)

const MotorcycleModel = model('Motorcycle', MotorcycleSchema)

module.exports = {
  MotorcycleSchema,
  MotorcycleModel
}
