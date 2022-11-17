const { addDays } = require('date-fns')
const { MotorcyclePostModel } = require('../models/motorcyclePostModel')

const { getISOTimezone } = require('../utils/getISOTimezone')

const currentDate = new Date().toISOString()
async function create(post) {
  if (!post.duration) return null
  const now = Date.now()
  const expired = addDays(now, post.duration)
  const publishedDate = getISOTimezone(now)
  const expiredDate = getISOTimezone(expired)
  const carAdToAdd = { ...post, publishedDate, expiredDate }
  const newAd = new MotorcyclePostModel(carAdToAdd)
  return await newAd.save()
}

async function getById({ postId }) {
  return await MotorcyclePostModel.findById(postId)
}

async function getAll() {
  return await MotorcyclePostModel.find({})
}
async function getSearch(model, yearValues, priceValues, brandValues, province, carsStyles, pageSize, page) {
  // console.log('Modelo')
  // console.log(model)
  // console.log('yearValues')
  // console.log(yearValues)
  // console.log('priceValues')
  // console.log(priceValues)
  // console.log('brandValues')
  // console.log(brandValues)
  // console.log('province')
  // console.log(province)
  // console.log('carsStyles')
  // console.log(carsStyles)
  // console.log('pageSize')
  // console.log(pageSize)
  // console.log('page')
  // console.log(page)

  const queryModel = new RegExp(model, 'i')
  const queryProvince = new RegExp(province, 'i')
  // console.log('queryProvince')
  // console.log(queryProvince)
  const queryCarsStyles = new RegExp(carsStyles, 'i')
  const queryYearValues = yearValues ? yearValues.split(',') : [1990, 2022]
  const queryPriceValues = priceValues ? priceValues.split(',') : [0, 10000000000]
  const queryBrandValues = brandValues ? brandValues.split(',').map((item) => new RegExp(item, 'i')) : new RegExp(undefined, 'i')
  // console.log('queryBrandValues')
  // console.log(queryBrandValues)
  return await MotorcyclePostModel.find(
    {
      $and: [
        { expiredDate: { $gte: currentDate } },
        { 'motorcycle.model': queryModel },
        { province: queryProvince },
        { 'motorcycle.style': queryCarsStyles },
        { 'motorcycle.year': { $gte: queryYearValues[0] } },
        { 'motorcycle.year': { $lte: queryYearValues[1] } },
        { 'motorcycle.price': { $gte: queryPriceValues[0] } },
        { 'motorcycle.price': { $lte: queryPriceValues[1] } },
        { 'motorcycle.brand': { $in: queryBrandValues } }
      ]
    }).limit(pageSize).skip(pageSize * page)
}
async function getSearchTotal(model, yearValues, priceValues, brandValues, province, carsStyles) {
  const queryModel = new RegExp(model, 'i')
  const queryProvince = new RegExp(province, 'i')
  const queryCarsStyles = new RegExp(carsStyles, 'i')
  const queryYearValues = yearValues ? yearValues.split(',') : [1990, 2022]
  const queryPriceValues = priceValues ? priceValues.split(',') : [0, 10000000000]
  const queryBrandValues = brandValues ? brandValues.split(',').map((item) => new RegExp(item, 'i')) : new RegExp(undefined, 'i')
  return await MotorcyclePostModel.find(
    {
      $and: [
        { expiredDate: { $gte: currentDate } },
        { 'motorcycle.model': queryModel },
        { province: queryProvince },
        { 'motorcycle.style': queryCarsStyles },
        { 'motorcycle.year': { $gte: queryYearValues[0] } },
        { 'motorcycle.year': { $lte: queryYearValues[1] } },
        { 'motorcycle.price': { $gte: queryPriceValues[0] } },
        { 'motorcycle.price': { $lte: queryPriceValues[1] } },
        { 'motorcycle.brand': { $in: queryBrandValues } }
      ]
    }).countDocuments({})
}

async function getPage(pageSize, page) {
  return await MotorcyclePostModel.find({
    expiredDate: { $gte: currentDate }
  }).limit(pageSize).skip(pageSize * page)
}
async function getTotal() {
  return await MotorcyclePostModel.countDocuments({
    expiredDate: { $gte: currentDate }
  })
}
async function remove({ postId }) {
  return await MotorcyclePostModel.findByIdAndRemove(postId)
}

async function addFiles({ postId, files = [] }) {
  const post = await MotorcyclePostModel.findById(postId)
  post.files = [...post.files, ...files]
  return post.save()
}

const MotorcycleServices = {
  create,
  getAll,
  getTotal,
  getPage,
  getSearch,
  getSearchTotal,
  getById,
  remove,
  addFiles
}

module.exports = { MotorcycleServices }
