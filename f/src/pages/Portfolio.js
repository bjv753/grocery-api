import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Portfolio () {
  return (
    <div id='portfolio-box'>
      <div id='portfolio'>
        <div className='portfolio-nav'>
          <Link id='rs-link' to='/portfolio/rs'>
            CSSG
          </Link>
          <Link id='cc-link' to='/portfolio/cc'>
            CC
          </Link>
          <Link id='lmno-link' to='/portfolio/lmno'>
            LMNO
          </Link>
          <Link id='gl-link' to='/portfolio/gl'>
            GL
          </Link>
          <Link id='ua-link' to='/portfolio/ua'>
            UA
          </Link>
          <Link id='co-link' to='/portfolio/co'>
            CO
          </Link>
        </div>
        <Outlet />
        <div id='default'></div>
      </div>
    </div>
  )
}

export default Portfolio
