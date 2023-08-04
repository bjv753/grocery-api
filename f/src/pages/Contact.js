import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7t7ieqb', 'contact_form', form.current, 'Knrc_kf2DJjxRt9kt')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    
      <form id='contact-box' ref={form} onSubmit={sendEmail}>
    <h2 id='contact-name'>Name</h2>
    <input id='contact-input' type="text" name='user_name'/>
    <h1  id='contact-email'>Email Address</h1>
      <input id='contact-input' type="text" name='user_email'/>
    <h2  id='contact-subject'>Subject</h2>
      <input id='contact-input' type="text" name='subject'/>      
    <h1  id='contact-message'>Message</h1>
      <textarea id='text-area' name='message'/>
      <button id="send">Send</button>
      </form>

  )
}

export default Contact