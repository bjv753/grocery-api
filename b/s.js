const express = require('express')
const cors = require('cors')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const { expressjwt } = require('express-jwt')



// Middleware (for each request)
app.use(cors())
app.use(express.json())
app.use(morgan('dev'))


// Connect to DB
mongoose.connect(
  process.env.MONGO_DB_URI,
  (err) => console.log(err)
)

// Routes
app.use('/grocery', require('./routes/groceryRouter.js'))

app.listen(process.env.PORT, () => {
  console.log('running on port ' + process.env.PORT )
})
