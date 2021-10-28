const next = require('next')
const express = require('express')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handleNextRequest = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // Apply some middlewares
  //   server.use(...);
  //   server.use(...);

  // Define custom API routes and their handlers
  server.get('/record', (req, res) => res.end('Record page!'))

  // Let Next.js handle the rest, as we assume these are frontend routes
  server.get('*', handleNextRequest)

  server.listen(3000)
})
