const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const {expresswt} = require('express-jwt')

// Middleware (for each request)
app.use(express.json())
app.use(morgan('dev'))

// Connect to the database
mongoose.connect(
      'mongodb://localhost:27017/trackingapp',
      console.log('Connected to the Database')
)

// Routes
app.use('/grocery', require('/routes/groceryRouter.js'))

app.listen(9000, () => {
      console.log(`Server is listening on port 9000`)
})