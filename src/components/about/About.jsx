import React from 'react'
import './about.css'
import ME from '../../assets/about.png'
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
            <img src={ME} alt="about image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className ="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 Months Building Web Apps</small>
            </article>

            <article className ="about__card">
              <MdComputer className='about__icon'/>
              <h5>Languages</h5>
              <small>JavaScript & Ruby</small>
            </article>
          </div>
            <p className='dev'>
            <mark className='hello'>Hello!</mark> I'm Tyree Webber, a full-stack web developer based out of Edmonton, Alberta Canada, looking to improve upon my coding and programming skills by building sleek, stylish and user-friendly web applications, games and programs. I currently have experience with JavaScript and Ruby, however I'm currently learning Python to strengthen my backend skills.
            </p>
            <p className='personal'>
            Outside of building web applications, I enjoy playing video games such as World of Warcraft, listening to a wide variety of music from bedroom pop to heavy metal and everything inbetween, fashion with my favourite designers being Rick Owens, Henri Alexander Levy and Demna Gvsalia, hanging out with friends and eating good food.
            </p>
            <a href="#contact" className='btn btn-primary'>Let's Talk!</a>
        </div>
      </div>
    </section>
  )
}

export default About