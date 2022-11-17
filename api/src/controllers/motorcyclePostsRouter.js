const { userExtractor } = require('../middleware')

const { cloudinary, getUploadFolder } = require('../services/Cloudinary')
const { MotorcycleServices } = require('../services/MotorcycleServices')
const motorcyclePostsRouter = require('express').Router()
const PageSize = 55

motorcyclePostsRouter.get('/', userExtractor, async (request, response) => {
  const carAd = request.body
  return MotorcycleServices.create(carAd)
})
motorcyclePostsRouter.get('/all', async (request, response) => {
  const page = parseInt(request.query.page || '0')
  const total = await MotorcycleServices.getTotal()
  const posts = await MotorcycleServices.getPage(PageSize, page)
  response.send({
    totalPages: Math.ceil(total / PageSize),
    posts
  }
  )
})

motorcyclePostsRouter.get('/search', async (request, response) => {
  const page = parseInt(request.query.page || '0')
  const { model, yearValues, priceValues, brandValues, province, carsStyles } = request.query
  const total = await MotorcycleServices.getSearchTotal(model, yearValues, priceValues, brandValues, province, carsStyles)
  const posts = await MotorcycleServices.getSearch(model, yearValues, priceValues, brandValues, province, carsStyles, PageSize, page)
  response.send({
    totalPages: Math.ceil(total / PageSize),
    posts
  }
  )
})

motorcyclePostsRouter.get('/:postId', async (request, response, next) => {
  const { postId } = request.params
  try {
    const carPost = await MotorcycleServices.getById({ postId })
    response.json(carPost)
  } catch (err) {
    next(err)
  }
})

motorcyclePostsRouter.delete('/:postId', userExtractor, async (request, response, next) => {

})

motorcyclePostsRouter.post('/', userExtractor, async (request, response, next) => {
  const { data, _userId } = request.body
  const { files: filesB64, ...post } = data
  post.publishedBy = _userId
  console.log({ post })
  try {
    const promises = filesB64.map(file => cloudinary.uploader.upload(file, { folder: getUploadFolder() }))
    const files = await Promise.all(promises)
    post.files = files
    const postAdded = await MotorcycleServices.create(post)
    response.json(postAdded)
  } catch (error) {
    next(error)
  }
})

module.exports = motorcyclePostsRouter
