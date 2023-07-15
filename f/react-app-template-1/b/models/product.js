const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Product Blueprint
const productSchema = new Schema({
  product: {
      type: String,
      required: true
},
  price: {
      type: String,
      required: true
},
  pounds: Number,
})

module.exports = mongoose.model('Product', productSchema)