const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')

// Middleware (for each request)
app.use(express.json())
app.use(morgan('dev'))

// Connect to DB
mongoose.connect(
  'mongodb://127.0.0.1:27017/trackingapp',
  console.log('Connected to the DB')
)

// Routes
app.use('/grocery', require('./routes/groceryRouter.js'))


app.listen(9000, () => {
  console.log('Server is listening on PORT 9000')
})
