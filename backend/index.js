const express = require('express')
const app = express()
const dotenv = require('dotenv')
const port = 3000

// import routes
const yelp = require('./routes/yelp')

// Find environment variables
dotenv.config({ path: './config/config.env' })

app.use('/', yelp)

app.listen(port, () => {
  console.log(`App listening on port ${port}! Go to http://localhost:${port}`)
})
