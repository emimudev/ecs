const { NodeEnvironments } = require('./utils/nodeEnvironments')

/**
 * Initialize the server by taking an Express app
 * @param {import('express').Express} app Express app
 */
function startupServer(app) {
  const { NODE_ENV, PORT } = process.env

  if (!app) {
    throw new Error('Invalid app instance')
  }

  if (NODE_ENV !== NodeEnvironments.test) {
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`)
    })
  }
}

module.exports = { startupServer }
