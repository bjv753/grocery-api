import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
      const form = useRef()

      const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_7t7ieqb', 'contact_form', form.current, 'Knrc_kf2DJjxRt9kt')
              .then((result) => {
                  console.log(result.text);
              }, (error) => {
                  console.log(err.text)
              });
      };
      return (

            <form id="contact-box" ref={form} onSubmit={sendEmail}>
                  <h2>Name</h2>
                  <input type="text" id="contact-input" />
                  <h2>Email Address</h2>
                  <input type="text" id="contact-input" />
                  <h2>Subject</h2>
                  <input type="text" id="contact-input" />
                  <h2>Message</h2>
                  <textarea name="message" id="text-area" cols="30" rows="10"></textarea>
                  <button id="send">Send</button>
            </form>
      )
}

export default Contact