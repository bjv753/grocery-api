import React, {useContext} from 'react'
import shoppingCart from '../images/logos/shopping_cart.png'
import { UserContext } from '../context/UserProvider';


  function Checkout(){

      const { 
            user: { 
              username 
            }
          } = useContext(UserContext)
     
  return (
    <div >
      <div id='checkout-box'  >
        <h1> Ready to checkout {username} ?</h1>
        <h3>Your Products</h3>
        <div id="box"></div>
        <img id='checkout-cart' src={shoppingCart} alt="" />
      </div>
                  <div id="footer-box">
                    <div  id='footer-logo' alt="" />
                  </div>
    </div>
    
  )
}

export default Checkout