const { userExtractor } = require('../middleware')
const { CarPostService } = require('../services/CarPostService')
const { cloudinary, getUploadFolder } = require('../services/Cloudinary')
const carPostsRouter = require('express').Router()

carPostsRouter.get('/', userExtractor, async (request, response) => {
  const carAd = request.body
  return CarPostService.create(carAd)
})

carPostsRouter.get('/:postId', async (request, response, next) => {
  const { postId } = request.params
  try {
    const carPost = await CarPostService.getById({ postId })
    response.json(carPost)
  } catch (err) {
    next(err)
  }
})

carPostsRouter.delete('/:postId', userExtractor, async (request, response, next) => {

})

carPostsRouter.post('/', userExtractor, async (request, response, next) => {
  const { data, _userId } = request.body
  const { files: filesB64, ...post } = data
  post.publishedBy = _userId
  console.log({ post })
  try {
    const promises = filesB64.map(file => cloudinary.uploader.upload(file, { folder: getUploadFolder() }))
    const files = await Promise.all(promises)
    post.files = files
    const postAdded = await CarPostService.create(post)
    response.json(postAdded)
  } catch (error) {
    next(error)
  }
})

module.exports = carPostsRouter
