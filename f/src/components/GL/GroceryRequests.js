import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Grocery from './Grocery'
import GroceryForm from './GroceryForm'

export default function GroceryRequests () {
  const [grocery, setGrocery] = useState([])

  // GET ONE
  function getGrocery() {
    axios
      .get('/grocery')
      .then(response => setGrocery(response.data))
      .catch(error => console.log(error))
  }

  // POST  ONE
  function addGrocery(newGrocery) {
    axios
      .post('/grocery', newGrocery)
      .then(res => {
        setGrocery(prevGrocery => [...prevGrocery, res.data])
      })
      .catch(err => console.log(err))
  }

  // PUT  ONE
  function editGrocery(updates, groceryId) {
    axios
      .put(`/grocery/${groceryId}`, updates)
      .then(res => {
        setGrocery(prevGrocery =>
          prevGrocery.map(grocery =>
            grocery._id !== groceryId ? grocery : { ...grocery, ...updates }
          )
        )
      })
      .catch(error => console.log(error))
  }

  // DELETE  ONE
  function deleteGrocery (groceryId) {
    axios
      .delete(`/grocery/${groceryId}`)
      .then(response => {
        setGrocery(prevGrocery => 
          prevGrocery.filter(prevGrocery => prevGrocery._id !== groceryId))
      })
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getGrocery()
  }, [])

  return (
    <div id='form-box'>
      <GroceryForm submit={addGrocery} btnText={'Add Grocery'} />
      {grocery.map(prevGrocery => (
        <Grocery
          {...prevGrocery}
          deleteGrocery={deleteGrocery}
          editGrocery={editGrocery}
        />
      ))}
    </div>
  )
}
