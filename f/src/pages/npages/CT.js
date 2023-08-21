import React, {useState} from 'react'

function CT() {
  const [count, setCount] = useState(0)
  return (
    <>
    <h1>Counter</h1>
    <div id='ct-box' >
    <div id="ct">
    <div id='ct-type'>{count}</div>
    <button  onClick={() => setCount(count+1)}>+</button>
    <button onClick={() => setCount(count-1)} >-</button>
    </div>
    </div>
    </>
  )
}

export default CT