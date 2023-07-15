import React, {useContext} from 'react'
import { CartContext } from '../../context/CartProvider'

const LightCanisterCard = (props) => {
  const { addProduct2 } = useContext(CartContext)
  return (
    <div id='light-card'>
          <img id='card-image' src={props.img}  alt="" />
          <img id='cart-btn' onClick={addProduct2} src={props.cart}  alt="" />
            <p id='price' >{props.price}</p>
    </div>
  )
}

export default LightCanisterCard