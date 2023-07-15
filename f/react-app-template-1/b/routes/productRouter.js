const express = require('express')
const productRouter = express.Router()
const Product = require('../models/product.js')

  // GET ONE
  productRouter.get('/', (request,response, next) => {
    Product.find(( error, brands) => {
      if(error){
        response.status(500)
        return next(error)
      }
      return response.status(200).send(brands)
    })
  })

  // POST ONE 
  productRouter.post('/', (request, response, next) => {
    const newProduct = new Product(request.body)
    newProduct.save((error, savedProduct) => {
      if(error){
        response.status(500)
        return next(error)
      }
      return response.status(201).send(savedProduct)
    })
  })

  // UPDATE ONE //
  productRouter.put('/:productId', (request, response, next) => {
      Product.findOneAndUpdate(
      { _id: request.params.productId },
      request.body, 
      { new: true },
      (error, updatedProduct) => {
        if(error){
          response.status(500)
          return next(error)
        }
        return response.status(201).send(updatedProduct)
      }
    )   
  })

    // REMOVE ONE //
    productRouter.delete('/:productId', (request, response, next) => {
      Product.findOneAndDelete({ _id: request.params.productId } , (error, deleteModel) => {
        if(error){
          response.status(500)
          return next(error)
        }
        return response.status(200).send(`Successfully deleted item ${deleteModel.product} from the data base`)
      })
    })

module.exports = productRouter