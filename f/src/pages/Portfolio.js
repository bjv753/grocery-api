import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Portfolio() {
  return (
    <div id='portfolio-box'>
        <div id="portfolio">
        <div className="portfolio-nav">
                <Link id='rs-link' to="/portfolio/rs">RS</Link>
                <Link id='cc-link' to="/portfolio/cc">CC</Link>
                <Link id='lmno-link' to="/portfolio/lmno">LMNO</Link>
                <Link id='ta-link' to="/portfolio/ta">TA</Link>
                <Link id='ua-link' to="/portfolio/ua">UA</Link>
            </div>
            <Outlet />
            <div id="default"></div>
        </div>
      </div>
  )
}

export default Portfolio