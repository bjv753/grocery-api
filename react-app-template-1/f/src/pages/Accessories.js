import React from 'react'

import darkcanister from '../images/products/accessories/canisters/dark_canister.png'
import darkbackpack from '../images/products/accessories/backpacks/dark_backpack.png'
import darkwatch    from '../images/products/accessories/watches/dark_watch.png'
import darklaptop   from '../images/products/accessories/laptops/dark_laptop.png'
import darkphone    from '../images/products/accessories/phones/dark_phone.png'
import darkgoggles  from '../images/products/accessories/goggles/dark_goggles.png'

import lightcanister from '../images/products/accessories/canisters/light_canister.png'
import lightbackpack from '../images/products/accessories/backpacks/light_backpack.png'
import lightwatch    from '../images/products/accessories/watches/light_watch.png'
import lightlaptop from '../images/products/accessories/laptops/light_laptop.png'
import lightphone   from '../images/products/accessories/phones/light_phone.png'
import lightgoggles from '../images/products/accessories/goggles/light_goggles.png'

import darkredcanister from '../images/products/accessories/canisters/darkred_canister.png'
import darkredbackpack from '../images/products/accessories/backpacks/darkred_backpack.png'
import darkredwatch    from '../images/products/accessories/watches/darkred_watch.png'
import darkredlaptop   from '../images/products/accessories/phones/darkred_phone.png'
import darkredphone    from '../images/products/accessories/laptops/darkred_laptop.png'
import darkredgoggles  from '../images/products/accessories/goggles/darkred_goggles.png'

import lightbluecanister from '../images/products/accessories/canisters/lightblue_canister.png'
import lightbluebackpack from '../images/products/accessories/backpacks/lightblue_backpack.png'
import lightbluewatch    from '../images/products/accessories/watches/lightblue_watch.png'
import lightbluelaptop   from '../images/products/accessories/phones/lightblue_phone.png'
import lightbluephone    from '../images/products/accessories/laptops/lightblue_laptop.png'
import lightbluegoggles  from '../images/products/accessories/goggles/lightblue_goggles.png'

// ------ End Images ------ Start Cards ------ \\
import DarkCanisterCard from '../components/accessories/DarkCanisterCard'
import DarkBackpackCard from '../components/accessories/DarkBackpackCard'
import DarkWatchCard    from '../components/accessories/DarkWatchCard'
import DarkLaptopCard   from '../components/accessories/DarkLaptopCard'
import DarkPhoneCard    from '../components/accessories/DarkPhoneCard'
import DarkGogglesCard  from '../components/accessories/DarkGogglesCard'

import LightCanisterCard from '../components/accessories/LightCanisterCard'
import LightBackpackCard from '../components/accessories/LightBackpackCard'
import LightWatchCard    from '../components/accessories/LightWatchCard'
import LightLaptopCard   from '../components/accessories/LightLaptopCard'
import LightPhoneCard    from '../components/accessories/LightPhoneCard'
import LightGogglesCard  from '../components/accessories/LightGogglesCard'

import DarkRedCanisterCard from '../components/accessories/DarkRedCanisterCard'
import DarkRedBackpackCard from '../components/accessories/DarkRedBackpackCard'
import DarkRedWatchCard    from '../components/accessories/DarkRedWatchCard'
import DarkRedLapTopCard   from '../components/accessories/DarkRedLapTopCard'
import DarkRedPhoneCard    from '../components/accessories/DarkRedPhoneCard'
import DarkRedGogglesCard  from '../components/accessories/DarkRedGogglesCard'

import LightBlueCanisterCard from '../components/accessories/LightBlueBackpackCard'
import LightBlueBackpackCard from '../components/accessories/LightBlueBackpackCard'
import LightBlueWatchCard    from '../components/accessories/LightBlueWatchCard'
import LightBlueLaptopCard   from '../components/accessories/LightBlueLaptopCard'
import LightBluePhoneCard    from '../components/accessories/LightBluePhoneCard'
import LightBlueGogglesCard  from '../components/accessories/LightBlueGogglesCard'

import cartBtn from '../images/logos/shopping_cart.png'

function Accessories() {
  return (
    <div >
    <div id='home-box'>
            <div>
                 <DarkCanisterCard
                    price='$10.00'
                    img={darkcanister}
                    cart={cartBtn}
                  />
                  <DarkBackpackCard
                    price='$60.00'
                    img={darkbackpack}
                    cart={cartBtn}
                  />
                  <DarkWatchCard
                    price='$100.00'
                    img={darkwatch}
                    cart={cartBtn}
                  />
                  <DarkLaptopCard
                    price='$1000.00'
                    img={darklaptop}
                    cart={cartBtn}
                  />
                  <DarkPhoneCard
                    theme='light'
                    price='$1000.00'
                    img={darkphone}
                    cart={cartBtn}
                  />  
                  <DarkGogglesCard
                    theme='light'
                    price='$1000.00'
                    img={darkgoggles}
                    cart={cartBtn}
                  />
            </div> 
            <div>
               <LightCanisterCard
                    theme='light'
                    price='$10.00'
                    img={lightcanister}
                    cart={cartBtn}
                  />
                  <LightBackpackCard
                    theme='light' 
                    price='$60.00'
                    img={lightbackpack}
                    cart={cartBtn}
                  />
                  <LightWatchCard
                    theme='light'
                    price='$100.00'
                    img={lightwatch}
                    cart={cartBtn}
                  />
                  <LightLaptopCard
                    theme='light'
                    price='$1000.00'
                    img={lightlaptop}
                    cart={cartBtn}
                  />                               
                  <LightPhoneCard
                    theme='light'
                    price='$1000.00'
                    img={lightphone}
                    cart={cartBtn}
                  />  
                  <LightGogglesCard
                    theme='light'
                    price='$1000.00'
                    img={lightgoggles}
                    cart={cartBtn}
                  />        
            </div> 
            <div>
                  <DarkRedCanisterCard
                    price='$10.00'
                    img={darkredcanister}
                    cart={cartBtn}
                  />
                  <DarkRedBackpackCard
                    price='$60.00'
                    img={darkredbackpack}
                    cart={cartBtn}
                  />
                  <DarkRedWatchCard
                    price='$100.00'
                    img={darkredwatch}
                    cart={cartBtn}
                  />
                  <DarkRedLapTopCard
                    price='$1000.00'
                    img={darkredlaptop}
                    cart={cartBtn}
                  />
                  <DarkRedPhoneCard
                    theme='light'
                    price='$1000.00'
                    img={darkredphone}
                    cart={cartBtn}
                  />  
                  <DarkRedGogglesCard
                    theme='light'
                    price='$1000.00'
                    img={darkredgoggles}
                    cart={cartBtn}
                  />
            </div>
            <div>
                 <LightBlueCanisterCard
                    price='$10.00'
                    img={lightbluecanister}
                    cart={cartBtn}
                  />
                  <LightBlueBackpackCard
                    price='$60.00'
                    img={lightbluebackpack}
                    cart={cartBtn}
                  />
                  <LightBlueWatchCard
                    price='$100.00'
                    img={lightbluewatch}
                    cart={cartBtn}
                  />
                  <LightBlueLaptopCard
                    price='$1000.00'
                    img={lightbluelaptop}
                    cart={cartBtn}
                  />
                  <LightBluePhoneCard
                    theme='light'
                    price='$1000.00'
                    img={lightbluephone}
                    cart={cartBtn}
                  />  
                  <LightBlueGogglesCard
                    theme='light'
                    price='$1000.00'
                    img={lightbluegoggles}
                    cart={cartBtn}
                  />
            </div>
            <div>
                 
            </div> 
            
    </div>
    <div id="footer-box">
                  <div  id='footer-logo' alt="" />
            </div>
    </div>
  )
}

export default Accessories