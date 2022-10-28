const { zonedTimeToUtc, format } = require('date-fns-tz')
const { userExtractor } = require('../middleware')
const { CarAdService } = require('../services/CarAdService')
const carAdRouter = require('express').Router()
const { isDuplicated } = require('./utils')

carAdRouter.get('/', userExtractor, async (request, response) => {
  const carAd = request.body
  return CarAdService.create(carAd)
})

carAdRouter.get('/:id', async (request, response, next) => {

})

carAdRouter.delete('/:id', userExtractor, async (request, response, next) => {

})

carAdRouter.post('/', userExtractor, async (request, response, next) => {
  const carAd = request.body
  const date = await CarAdService.create(carAd)
  response.status(200).send({ date: format(zonedTimeToUtc(date, 'America/Costa_Rica'), 'yyyy-MM-dd HH:mm z') }).end()
})

carAdRouter.post('/id:/media', async (request, response, next) => {

})

module.exports = carAdRouter
