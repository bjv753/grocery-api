import React, {useContext} from 'react'
import { CartContext } from '../../context/CartProvider'

const DarkRedPhoneCard = (props) => {
  const { addProduct } = useContext(CartContext)
  return (
    <div id='dark-card'>
          <img id='card-image' src={props.img}  alt="" />
          <img id='cart-btn' onClick={addProduct} src={props.cart}  alt="" />
            <p id='price' >{props.price}</p>
    </div>
  )
}

export default DarkRedPhoneCard