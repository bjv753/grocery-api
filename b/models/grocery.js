const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Product Blueprint
const grocerySchema = new Schema({
  grocery: {
      type: String,
      required: true
},
  price: {
      type: String,
      required: true
},
  pounds: Number,
})

module.exports = mongoose.model('Grocery', grocerySchema)