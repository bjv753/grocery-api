import React, { useState } from 'react'

export default function GroceryForm(props) {
      const groceryInputs = { grocery: '' || props.grocery,  price: '' || props.price }
      const [ inputs, setInputs ] = useState(groceryInputs)
      
      function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
      }

      function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        props.toggler()
      }

  return ( 
    <div id='form-box'>
    <form 
      id='form'
      onSubmit={handleSubmit}>
      <input 
        type='text' 
        name='grocery' 
        value={inputs.grocery} 
        onChange={handleChange} 
        placeholder='Grocery' />
      <input 
        type='text' 
        name='price' 
        value={inputs.price} 
        onChange={handleChange} 
        placeholder='Price' />
      <button id='edit-btn'> Add Grocery </button>
    </form>
    </div>
  )
}



