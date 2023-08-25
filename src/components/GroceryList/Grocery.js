import React, { useState } from 'react'
import GroceryAdder from './GroceryForm'

export default function Grocery (props) {
  const { grocery, price, _id } = props
  const [editToggle, setEditToggle] = useState(false)

  return (
    <div id='box'>
      {!editToggle ? (
        <>
          <div id='gr'>{grocery} </div>
          <div id='pr'>{price} </div>
          <div id='btn-box'>
            <button id='delete-btn' onClick={() => props.deleteGrocery(_id)}>
              Delete
            </button>
            <button
              id='edit-btn'
              onClick={() => setEditToggle(prevToggle => !prevToggle)}
            >
              Edit
            </button>
          </div>
        </>
      ) : (
        <>
          <GroceryAdder
            grocery={grocery}
            price={price}
            _id={_id}
            btnText='Submit'
            submit={props.editGrocery}
            toggler={() => setEditToggle(prevToggle => !prevToggle)}
          />
          <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>
            Close
          </button>
        </>
      )}
    </div>
  )
}
