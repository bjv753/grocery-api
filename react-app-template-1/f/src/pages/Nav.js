import React, { useState, useContext } from 'react'
import { BrowserRouter as Router, Link, Route, Routes,  } from 'react-router-dom'
import { CartContext } from '../context/CartProvider'
import { UserContext } from '../context/UserProvider'

import Auth from './Auth'
import Home from "./Home"
import Apparel from "../pages/Apparel"
import Accessories from "../pages/Accessories"
import Contact from "../pages/Contact"
import CommingSoon from "../pages/CommingSoon"
import Checkout from '../pages/Checkout'
import lmnolight from '../images/logos/lmno_light.png'
import lmnocart from '../images/logos/shopping_cart.png'
import Navbar from '../components/Navbar'

const Nav = () => {

  const { 
    logout, token, 
    user: { 
      username 
    }, 
  } = useContext(UserContext)

  const { count } = useContext(CartContext)
  const [toggleAuth, setToggleAuth] = useState(false)

  function handleAuth() {
    setToggleAuth(true)
  }

  return (
    
    <div>
      <Router>
        <div id="links-box"> 
        <div id="portal-links-box">
            <Link to="/" id="links"><img id="logo-left" src={lmnolight} alt=''/></Link> 
            {!token ?
            <>
            <Link id="portal-links" onClick={handleAuth}>SignUp/In</Link> 
            </>
            :
            <>
            { token && <Navbar logout={ logout }/> }
            </>
            }
            
            
          </div>
            <Link to="/accessories" id="links">Accessories</Link>   
            <Link to="/clothing" id="links">Apparel</Link> 
            {toggleAuth && (<Auth setToggleAuth={setToggleAuth} />)}
            <Link to="/commingsoon" id="links">Comming Soon!</Link>  
            <Link to="/contact" id="links">Contact</Link> 
          <div id="portal-links-box">
          <div id="links" >{username}</div>
            <Link to="/checkout" ><img id="logo-right" src={lmnocart} alt=''/> <div id='count'>{count}</div></Link>
            
          </div>
        </div>
        <Routes>
          <Route path={'/'} element={<Home/>}></Route>
          <Route path={'/clothing'} element={<Apparel/>}></Route>
          <Route path={'/accessories'} element={<Accessories/>}></Route>
          <Route path={'/commingsoon'} element={<CommingSoon/>}></Route>
          <Route path={'/contact'} element={<Contact/>}></Route>
          <Route path={'/checkout'} element={<Checkout/>}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default Nav;
