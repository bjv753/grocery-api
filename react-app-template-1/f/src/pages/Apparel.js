import React from 'react'

import lightflipflops    from '../images/products/apparel/flipflops/light_flip_flops.png'
import lightcrewt        from '../images/products/apparel/crewts/light_crew_t.png'
import lightboardshorts from '../images/products/apparel/boardshorts/light_board_shorts.png'
import lightlongsleeves from '../images/products/apparel/longsleeves/light_long_sleeve.png'
import lightboxerbriefs from '../images/products/apparel/boxerbriefs/light_boxer_briefs.png'
import lightjoggers     from '../images/products/apparel/joggers/light_joggers.png'

import darkflipflops   from '../images/products/apparel/flipflops/dark_flip_flops.png'
import darkcrewt       from '../images/products/apparel/crewts/dark_crew_t.png'
import darkboardshorts from '../images/products/apparel/boardshorts/dark_board_shorts.png'
import darklongsleeves from '../images/products/apparel/longsleeves/dark_long_sleeve.png'
import darkboxerbriefs from '../images/products/apparel/boxerbriefs/dark_boxer_briefs.png'
import darkjoggers       from '../images/products/apparel/joggers/dark_joggers.png'

import darkpinkflipflops   from '../images/products/apparel/flipflops/darkpink_flip_flops.png'
import darkpinkcrewt       from '../images/products/apparel/crewts/darkpink_crew_t.png'
import darkpinkboardshorts from '../images/products/apparel/boardshorts/darkpink_board_shorts.png'
import darkpinklongsleeves from '../images/products/apparel/longsleeves/darkpink_long_sleeve.png'
import darkpinkboxerbriefs from '../images/products/apparel/boxerbriefs/darkpink_boxer_briefs.png'
import darkpinkjoggers       from '../images/products/apparel/joggers/darkpink_joggers.png'

import lightgreenflipflops   from '../images/products/apparel/flipflops/lightgreen_flip_flops.png'
import lightgreencrewt       from '../images/products/apparel/crewts/lightgreen_crew_t.png'
import lightgreenboardshorts from '../images/products/apparel/boardshorts/lightgreen_board_shorts.png'
import lightgreenlongsleeves from '../images/products/apparel/longsleeves/lightgreen_long_sleeve.png'
import lightgreenboxerbriefs from '../images/products/apparel/boxerbriefs/lightgreen_boxer_briefs.png'
import lightgreenjoggers     from '../images/products/apparel/joggers/lightgreen_joggers.png'

import LightFlipFlopsCard from '../components/apparel/Light/LightFlipFlopsCard';
import LightCrewTCard from '../components/apparel/Light/LightCrewTCard';
import LightBoardShortsCard from '../components/apparel/Light/LightBoardShortsCard';
import LightLongSleevesCard from '../components/apparel/Light/LightLongSleevesCard';
import LightBoxerBriefsCard from '../components/apparel/Light/LightBoxerBriefsCard';
import LightJoggersCard from '../components/apparel/Light/LightJoggersCard';

import DarkFlipFlopsCard from '../components/apparel/Dark/DarkFlipFlopsCard'
import DarkCrewTCard from '../components/apparel/Dark/DarkCrewTCard'
import DarkBoardShortsCard  from '../components/apparel/Dark/DarkBoardShortsCard'
import DarkLongSleevesCard  from '../components/apparel/Dark/DarkLongSleevesCard'
import DarkBoxerBriefsCard   from '../components/apparel/Dark/DarkBoxerBriefsCard'
import DarkJoggersCard from '../components/apparel/Dark/DarkJoggersCard'

import DarkPinkFlipFlopsCard from '../components/apparel/DarkPink/DarkPinkFlipFlopsCard'
import DarkPinkCrewTCard from '../components/apparel/DarkPink/DarkPinkCrewTCard'
import DarkPinkBoardShortsCard  from '../components/apparel/DarkPink/DarkPinkBoardShortsCard'
import DarkPinkLongSleevesCard  from '../components/apparel/DarkPink/DarkPinkLongSleevesCard'
import DarkPinkBoxerBriefsCard   from '../components/apparel/DarkPink/DarkPinkBoxerBriefsCard'
import DarkPinkJoggersCard from '../components/apparel/DarkPink/DarkPinkJoggersCard'

import LightGreenFlipFlopsCard from '../components/apparel/LightGreen/LightGreenFlipFlopsCard';
import LightGreenCrewTCard from '../components/apparel/LightGreen/LightGreenCrewTCard';
import LightGreenBoardShortsCard from '../components/apparel/LightGreen/LightGreenBoardShortsCard';
import LightGreenLongSleevesCard from '../components/apparel/LightGreen/LightGreenLongSleevesCard';
import LightGreenBoxerBriefsCard from '../components/apparel/LightGreen/LightGreenBoxerBriefsCard';
import LightGreenJoggersCard from '../components/apparel/LightGreen/LightGreenJoggersCard';

import cartBtn from '../images/logos/shopping_cart.png'

function Apparel() {
  return (
    <div>
      <div id='home-box' >
      <div>
                 <DarkFlipFlopsCard
                    price='$15.00'
                    img={darkflipflops}
                    cart={cartBtn}
                  />
                  <DarkCrewTCard
                    price='$20.00'
                    img={darkcrewt}
                    cart={cartBtn}
                  />
                  <DarkBoardShortsCard
                    price='$15.00'
                    img={darkboardshorts}
                    cart={cartBtn}
                  />
                  <DarkLongSleevesCard
                    price='$30.00'
                    img={darklongsleeves}
                    cart={cartBtn}
                  />
                  <DarkBoxerBriefsCard
                    price='$10.00'
                    img={darkboxerbriefs}
                    cart={cartBtn}
                  />  
                  <DarkJoggersCard
                    price='$45.00'
                    img={darkjoggers}
                    cart={cartBtn}
                  />
            </div> 
      <div>
               <LightFlipFlopsCard
                    price='$15.00'
                    img={lightflipflops}
                    cart={cartBtn}
                  />
                  <LightCrewTCard
                    price='$20.00'
                    img={lightcrewt}
                    cart={cartBtn}
                  />
                  <LightBoardShortsCard
                    price='$15.00'
                    img={lightboardshorts}
                    cart={cartBtn}
                  />
                  <LightLongSleevesCard
                    price='$30.00'
                    img={lightlongsleeves}
                    cart={cartBtn}
                  />                               
                  <LightBoxerBriefsCard
                    price='$10.00'
                    img={lightboxerbriefs}
                    cart={cartBtn}
                  />  
                  <LightJoggersCard
                    price='$45.00'
                    img={lightjoggers}
                    cart={cartBtn}
                  />        
            </div> 
            <div>
                 <DarkPinkFlipFlopsCard
                    price='$15.00'
                    img={darkpinkflipflops}
                    cart={cartBtn}
                  />
                  <DarkPinkCrewTCard
                    price='$30.00'
                    img={darkpinkcrewt}
                    cart={cartBtn}
                  />
                  <DarkPinkBoardShortsCard
                    price='$15.00'
                    img={darkpinkboardshorts}
                    cart={cartBtn}
                  />
                  <DarkPinkLongSleevesCard
                    price='$30.00'
                    img={darkpinklongsleeves}
                    cart={cartBtn}
                  />
                  <DarkPinkBoxerBriefsCard
                    price='$10.00'
                    img={darkpinkboxerbriefs}
                    cart={cartBtn}
                  />  
                  <DarkPinkJoggersCard
                    price='$45.00'
                    img={darkpinkjoggers}
                    cart={cartBtn}
                  />
            </div> 
            <div>
               <LightGreenFlipFlopsCard
                    price='$15.00'
                    img={lightgreenflipflops}
                    cart={cartBtn}
                  />
                  <LightGreenCrewTCard
                    price='$30.00'
                    img={lightgreencrewt}
                    cart={cartBtn}
                  />
                  <LightGreenBoardShortsCard
                    price='$15.00'
                    img={lightgreenboardshorts}
                    cart={cartBtn}
                  />
                  <LightGreenLongSleevesCard
                    price='$30.00'
                    img={lightgreenlongsleeves}
                    cart={cartBtn}
                  />                               
                  <LightGreenBoxerBriefsCard
                    price='$10.00'
                    img={lightgreenboxerbriefs}
                    cart={cartBtn}
                  />  
                  <LightGreenJoggersCard
                    price='$45.00'
                    img={lightgreenjoggers}
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

export default Apparel