import React from 'react'

import darkcanister from '../images/products/accessories/canisters/dark_canister.png'
import darkbackpack from '../images/products/accessories/backpacks/dark_backpack.png'
import darkwatch    from '../images/products/accessories/watches/dark_watch.png'
import darklaptop   from '../images/products/accessories/laptops/dark_laptop.png'

import lightcanister from '../images/products/accessories/canisters/light_canister.png'
import lightbackpack from '../images/products/accessories/backpacks/light_backpack.png'
import lightwatch    from '../images/products/accessories/watches/light_watch.png'
import lightlaptop   from '../images/products/accessories/laptops/light_laptop.png'

import darkflipflops from '../images/products/apparel/flipflops/dark_flip_flops.png'
import darkcrewt from '../images/products/apparel/crewts/dark_crew_t.png'
import darkboardshorts from '../images/products/apparel/boardshorts/dark_board_shorts.png'
import darklongsleeves from '../images/products/apparel/longsleeves/dark_long_sleeve.png'

import lightflipflops from '../images/products/apparel/flipflops/light_flip_flops.png'
import lightcrewt from '../images/products/apparel/crewts/light_crew_t.png'
import lightboardshorts from '../images/products/apparel/boardshorts/light_board_shorts.png'
import lightlongsleeves from '../images/products/apparel/longsleeves/light_long_sleeve.png'

// ----- End Images ----- Start Cards ----- \\

import DarkCanisterCard from '../components/accessories/DarkCanisterCard'
import DarkBackpackCard from '../components/accessories/DarkBackpackCard'
import DarkWatchCard from '../components/accessories/DarkWatchCard'
import DarkLaptopCard from '../components/accessories/DarkLaptopCard'

import LightCanisterCard from '../components/accessories/LightCanisterCard'
import LightBackpackCard from '../components/accessories/LightBackpackCard'
import LightWatchCard from '../components/accessories/LightWatchCard'
import LightLaptopCard from '../components/accessories/LightLaptopCard'

import cartBtn from '../images/logos/shopping_cart.png'

// ----- End Imports ----- Start Page ----- \\

import FlipFlopsCard from '../components/apparel/Light/LightFlipFlopsCard'
import CrewTCard from '../components/apparel/Light/LightCrewTCard'
import BoardShortsCard from '../components/apparel/Light/LightBoardShortsCard'
import LongSleevesCard from '../components/apparel/Light/LightLongSleevesCard'

const Home = () => {
  return (
<div>
    <div id='home-box' > 
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
              </div>
            {/* ----- End Dark ----- LightStart ----- */}
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
              </div>
            {/* ----- End Accessories ----- Start Apparel ----- */}
            <div>
                  <FlipFlopsCard
                    price='$60.00'
                    img={darkflipflops}
                    cart={cartBtn}
                  />
                  <CrewTCard
                    price='$60.00'
                    img={darkcrewt}
                    cart={cartBtn}
                  />
                  <BoardShortsCard
                    price='$60.00'
                    img={darkboardshorts}
                    cart={cartBtn}
                  />
                  <LongSleevesCard
                    price='$60.00'
                    img={darklongsleeves}
                    cart={cartBtn}
                  />                  
              </div>
            {/* ----- End Dark ----- Start Light ----- */}  
            <div>
                  <FlipFlopsCard
                    theme='light'
                    price='$60.00'
                    img={lightflipflops}
                    cart={cartBtn}
                  />
                  <CrewTCard
                    theme='light'
                    price='$60.00'
                    img={lightcrewt}
                    cart={cartBtn}
                  />
                  <BoardShortsCard
                    theme='light'
                    price='$60.00'
                    img={lightboardshorts}
                    cart={cartBtn}
                  />
                  <LongSleevesCard
                    theme='light'
                    price='$60.00'
                    img={lightlongsleeves}
                    cart={cartBtn}
                  />                     
                  </div>
                  </div>
                    <div id="footer-box">
                      <div  id='footer-logo' alt="" />
                    </div> 
                  </div>
  )
}

export default Home