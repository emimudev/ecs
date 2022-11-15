const { addDays } = require('date-fns')
const { CarPostModel } = require('../models/carPostModel')
const { getISOTimezone } = require('../utils/getISOTimezone')

const currentDate = new Date().toISOString()
async function create(post) {
  if (!post.duration) return null
  const now = Date.now()
  const expired = addDays(now, post.duration)
  const publishedDate = getISOTimezone(now)
  const expiredDate = getISOTimezone(expired)
  const carAdToAdd = { ...post, publishedDate, expiredDate }
  const newAd = new CarPostModel(carAdToAdd)
  return await newAd.save()
}

async function getById({ postId }) {
  return await CarPostModel.findById(postId)
}

async function getAll() {
  return await CarPostModel.find({})
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
  return await CarPostModel.find(
    {
      $and: [
        { expiredDate: { $gte: currentDate } },
        { 'car.model': queryModel },
        { province: queryProvince },
        { 'car.style': queryCarsStyles },
        { 'car.year': { $gte: queryYearValues[0] } },
        { 'car.year': { $lte: queryYearValues[1] } },
        { 'car.price': { $gte: queryPriceValues[0] } },
        { 'car.price': { $lte: queryPriceValues[1] } },
        { 'car.brand': { $in: queryBrandValues } }
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
  return await CarPostModel.find(
    {
      $and: [
        { expiredDate: { $gte: currentDate } },
        { 'car.model': queryModel },
        { province: queryProvince },
        { 'car.style': queryCarsStyles },
        { 'car.year': { $gte: queryYearValues[0] } },
        { 'car.year': { $lte: queryYearValues[1] } },
        { 'car.price': { $gte: queryPriceValues[0] } },
        { 'car.price': { $lte: queryPriceValues[1] } },
        { 'car.brand': { $in: queryBrandValues } }
      ]
    }).countDocuments({})
}

async function getPage(pageSize, page) {
  return await CarPostModel.find({
    expiredDate: { $gte: currentDate }
  }).limit(pageSize).skip(pageSize * page)
}
async function getTotal() {
  return await CarPostModel.countDocuments({
    expiredDate: { $gte: currentDate }
  })
}
async function remove({ postId }) {
  return await CarPostModel.findByIdAndRemove(postId)
}

async function addFiles({ postId, files = [] }) {
  const post = await CarPostModel.findById(postId)
  post.files = [...post.files, ...files]
  return post.save()
}

const CarPostService = {
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

module.exports = { CarPostService }
