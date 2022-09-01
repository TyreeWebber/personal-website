import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {RiInstagramFill} from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Tyree Webber</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/tyreewebber/"><BsLinkedin/></a>
        <a href="https://www.instagram.com/tyreewebber_/"><RiInstagramFill/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; 2022 Tyree Webber. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer