import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Portfolio () {
  return (
    <div id='portfolio-box'>
      <div id='portfolio'>
        <div className='portfolio-nav'>
          <Link id='gradient-generator-link' to='/portfolio/gradient-generator'>
            Gradient Generator
          </Link>
          <Link id='cc-link' to='/portfolio/currency-converter'>
            Currency Converter
          </Link>
          <Link id='gl-link' to='/portfolio/grocery-list'>
            Grocery List
          </Link>
          <Link id='co-link' to='/portfolio/check-out'>
            Checkout
          </Link>
          <Link id='ti-link' to='/portfolio/timer'>
            Timer
          </Link>
          <Link id='ct-link' to='/portfolio/counter'>
            Counter
          </Link>
        </div>
        <Outlet />
      </div>
    </div>
  )
}

export default Portfolio
