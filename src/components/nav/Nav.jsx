import React from 'react'
import './nav.css'
import { useState } from 'react'
import {MdHome} from 'react-icons/md'
import {HiUser} from 'react-icons/hi'
import {AiFillProject} from 'react-icons/ai'
import {MdMessage} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
   <nav>
    <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><MdHome/></a>
    <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><HiUser/></a>
    <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><AiFillProject/></a>
    <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdMessage/></a>
   </nav>
  )
}

export default Nav