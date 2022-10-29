const { addDays } = require('date-fns')
const { CarPostModel } = require('../models/carPostModel')
const { getISOTimezone } = require('../utils/getISOTimezone')

async function create(carAd) {
  if (!carAd.duration) return null
  const now = Date.now()
  const expired = addDays(now, carAd.duration)
  const publishedDate = getISOTimezone(now)
  const expiredDate = getISOTimezone(expired)
  const carAdToAdd = { ...carAd, publishedDate, expiredDate }
  const newAd = new CarPostModel(carAdToAdd)
  return await newAd.save()
}

async function getById({ carAdId }) {
  return await CarPostModel.findById(carAdId)
}

async function getAll() {
  return await CarPostModel.find({})
}

async function remove({ cardAdId }) {
  return await CarPostModel.findByIdAndRemove(cardAdId)
}

const CarPostService = {
  create,
  getAll,
  getById,
  remove
}

module.exports = { CarPostService }
