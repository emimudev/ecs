const { zonedTimeToUtc, format } = require('date-fns-tz')
const { CarAdModel } = require('../models/carAdModel')

async function create(carAd) {
  const publishedDay = Date.now()
  const newAd = new CarAdModel(carAd)
  console.log({
    unformatDate: publishedDay,
    formatedDate: zonedTimeToUtc(publishedDay, 'America/Costa_Rica'),
    example: format(zonedTimeToUtc(publishedDay, 'America/Costa_Rica'), 'yyyy-MM-dd HH:mm z')
  })
  return zonedTimeToUtc(publishedDay, 'America/Costa_Rica')
}

async function getById({ carAdId }) {
  return await CarAdModel.findById(carAdId)
}

async function getAll() {
  return await CarAdModel.find({})
}

async function remove({ cardAdId }) {
  return await CarAdModel.findByIdAndRemove(cardAdId)
}

const CarAdService = {
  create,
  getAll,
  getById,
  remove
}

module.exports = { CarAdService }
