import React, {useState} from 'react'

function CO() {
let MOY = ['JAN','FEB','MAR','APR','MAY','JUN','JUL','AUG','SEP','OCT','NOV','DEC']
const [month, setMonth] = useState('JAN')
let DAY = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]
const [day, setDay] = useState(1)
let cards = ['VISA', 'MASTERCARD']
const [card, setCard] = useState('VISA')
  return (
    <div id='co-box'>
      <div id="co">
      <h1>Checkout</h1>
        <div id="form-box">
          <div id="form">
        <input id='fn' type="text" placeholder='First Name'/>
        <input id='ln' type="text" placeholder='Last Name' />
         <br />
        <select name="" id=""> 
           {cards.map( (card,_index) => ( <option>{card}</option> )) }
        </select>
        <select name="" id=""> 
           {MOY.map( (month,_index) => ( <option>{month}</option> )) }
        </select>
        <select name="" id=""> 
           {DAY.map( (day,_index) => ( <option>{day}</option> )) }
        </select> <br />
        <input id='cn' type="text" placeholder='xxxx xxxx xxxx xxxx' /> 
        <input id='cvc' type="text" placeholder='CVC' /> <br />
        <button id='cob' >Checkout</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default CO