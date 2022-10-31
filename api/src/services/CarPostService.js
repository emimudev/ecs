const { addDays } = require('date-fns')
const { CarPostModel } = require('../models/carPostModel')
const { getISOTimezone } = require('../utils/getISOTimezone')

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
  getById,
  remove,
  addFiles
}

module.exports = { CarPostService }
