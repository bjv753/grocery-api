import React from 'react'

const Contact = () => {
  return (
    <div id='contact-box' >
    <h2 id='contact-name'>Name</h2>
    <input id='contact-input' type="text" />
    <h1  id='contact-email'>Email Address</h1>
      <input id='contact-input' type="text" />
    <h2  id='contact-subject'>Subject</h2>
      <input id='contact-input' type="text" />      
    <h1  id='contact-message'>Message</h1>
      <textarea id='text-area'/>
      <button id="send">Send</button>
    </div>
  )
}

export default Contact