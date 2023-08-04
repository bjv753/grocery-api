import React from 'react'

import comming1 from '../images/products/accessories/goggles/pink_purple_checker_goggles.png'
import comming2 from '../images/products/accessories/goggles/turquoise_pink_checker_goggles.png'
import comming3 from '../images/products/accessories/goggles/orange_checker_goggles.png'

function Clothing() {
  return (
    <div>
      <div id='products-box' >
                  <div id='comming-soon'>
                    <img id="accessory-2" src={comming1} alt="" />
                    <img id="accessory-1" src={comming3} alt="" />
                    <img id="accessory-2" src={comming2} alt="" />
                  </div>
                  
      </div>
                  <div id="footer-box">
                    <div  id='footer-logo' alt="" />
                  </div>
    </div>
  )
}

export default Clothing