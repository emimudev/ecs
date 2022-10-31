const { NODE_ENV, NodeEnvironments } = require('../env')

const cloudinary = require('cloudinary').v2

cloudinary.config({
  cloud_name: 'dvpbdhkn0',
  api_key: '899371399297245',
  api_secret: '9FzMBG3h_LpitIuRjnRZKgkes7w'
})

const getUploadFolder = () => UploadFolders[NODE_ENV]

const UploadFolders = {
  [NodeEnvironments.production]: 'ecs',
  [NodeEnvironments.development]: 'dev',
  [NodeEnvironments.test]: 'test'
}

module.exports = {
  cloudinary,
  getUploadFolder
}
