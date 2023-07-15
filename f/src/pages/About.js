import React from 'react'
import propic from '../images/cross-hatch.png'

const About = () => {
  return (
    <div className='app' >
      <div id="about-box">
        <img id='profile-picture' src={propic} alt="" />
    <h2 id='about'>I enjoy technology and solving hard problems!
      This is why I love web development. It allows me to collaborate and use my 
      natural ability to make a positive impact. My ultimate 
      goal is to work for a company that is helping to make the world a
      more enjoyable place to live! 
      </h2>
    </div>
    </div>
  )
}

export default About