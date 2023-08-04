const express = require('express')
const{deleteModel} = require('mongoose')
const groceryRouter = express.Router()
const Grocery = require('../models/grocery.js')

// GET ONE 
groceryRouter.get('/', (req,res) => {
  Grocery.find((err, brands) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(200).send(brands)
  })
})

// POST ONE
groceryRouter.post('/', (req,res,next) => {
  const newGrocery = new Grocery(req.body)
  newGrocery.save((err, savedGrocery) => {
    if(err){
      res.status(500)
      return next(err)
    }
    return res.status(201).send(savedGrocery)
  })
})

// UPDATE ONE
groceryRouter.put('/:groceryId', (req,res,next) => {
  Grocery.findOneAndUpdate(
    {_id: req.params.groceryId},
    req.body,
    { new: true },
    (err, updatedGrocery) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(201).send(updatedGrocery)
    }
  )
})

// DELETE ONE 
groceryRouter.delete('/:groceryId', (req,res) => {
  Grocery.findOneAndDelete(
    {_id: req.params.groceryId},
    (err, deleteModel) => {
      if(err){
        res.status(500)
        return next(err)
      }
      return res.status(200).send(
        `Successfully deleted item
        ${deleteModel.grocery} from the database`)
    })
    })
    module.exports = groceryRouter

