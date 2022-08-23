import React from 'react'
import './about.css'
// import ME from '../../assets/'
import {FaAward} from 'react-icons/fa'
import {MdComputer} from 'react-icons/md'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            {/* <img src={ME} alt="about image" /> */}
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className ="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Months Buidling Web Apps</small>
            </article>

            <article className ="about__card">
              <MdComputer className='about__icon'/>
              <h5>Languages</h5>
              <small>JavaScript & Ruby</small>
            </article>
          </div>
            <p>
            I'm Tyree Webber, A recent Lighthouse Labs Full-Stack Web Development bootcamp graduate, looking to improve upon my coding and programming skills by building sleek, stylish and user-friendly web applications, games and programs.
            </p>

            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About