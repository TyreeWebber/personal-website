import React from 'react'
import './contact.css'
import useClipboard from "react-use-clipboard";
import { MdEmail } from 'react-icons/md';
import { FaDiscord } from 'react-icons/fa'

const Contact = () => {
  const [isCopied, setCopied] = useClipboard("tykw#7233");

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdEmail/>
            <h4>Email</h4>
            <h5>webber.tyree@gmail.com</h5>
            <a href="mailto:webber.tyree@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaDiscord/>
            <h4>Discord</h4>
            <h5>tykw#7233</h5>
            <button onClick={setCopied} className="btn btn-primary">{isCopied ? "Copied" : "Not Copied"}</button>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name="email" placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Message Me :)' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact