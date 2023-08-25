import React, { useState } from 'react'

export default function GroceryForm(props) {
      const groceryInputs = { grocery: '' || props.grocery,  price: '' || props.price }
      const [ inputs, setInputs ] = useState(groceryInputs)
      const [clear, setClear] = useState({})
      
      function handleChange(e){
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value }))
      }

      function handleSubmit(e){
        e.preventDefault()
        props.submit(inputs, props._id)
        props.toggler()
        setClear({grocery: '',price: ''})
      }

  return ( 
    <>      <h1>Grocery List</h1>
    <div id='gl-form-box'>
    <form id='gl-form'
      onSubmit={handleSubmit}>
      <input 
      id='gl-input'
        type='text' 
        name='grocery' 
        value={inputs.grocery} 
        onChange={handleChange} 
        placeholder='Grocery' />
      <input 
      id='gl-input'
        type='text' 
        name='price' 
        value={inputs.price} 
        onChange={handleChange} 
        placeholder='Price' />
      <button id='edit-btn'> Add Grocery </button>
    </form>
    </div>
    </>
  )
}



