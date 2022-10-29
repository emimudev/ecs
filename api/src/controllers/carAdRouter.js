const { userExtractor } = require('../middleware')
const { CarPostService } = require('../services/CarPostService')
const carAdRouter = require('express').Router()

carAdRouter.get('/', userExtractor, async (request, response) => {
  const carAd = request.body
  return CarPostService.create(carAd)
})

carAdRouter.get('/:id', async (request, response, next) => {

})

carAdRouter.delete('/:id', userExtractor, async (request, response, next) => {

})

carAdRouter.post('/', userExtractor, async (request, response, next) => {
  const carAd = request.body
  try {
    const post = await CarPostService.create(carAd)
    response.json(post)
  } catch (error) {
    next(error)
  }
})

carAdRouter.post('/id:/media', async (request, response, next) => {

})

module.exports = carAdRouter
