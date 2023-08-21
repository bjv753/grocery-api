import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Portfolio () {
  return (
    <div id='portfolio-box'>
      <div id='portfolio'>
        <div className='portfolio-nav'>
          <Link id='gg-link' to='/portfolio/gg'>
            GG
          </Link>
          <Link id='cc-link' to='/portfolio/cc'>
            CC
          </Link>
          <Link id='gl-link' to='/portfolio/gl'>
            GL
          </Link>
          <Link id='co-link' to='/portfolio/co'>
            CO
          </Link>
          <Link id='ti-link' to='/portfolio/ti'>
            TI
          </Link>
          <Link id='ct-link' to='/portfolio/ct'>
            CT
          </Link>
        </div>
        <Outlet />
        
      </div>
    </div>
  )
}

export default Portfolio
