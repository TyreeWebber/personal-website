import React from 'react'
import './projects.css'
import IMG1 from '../../assets/scheduler.png'
import IMG2 from '../../assets/happyeats.png'
import IMG3 from '../../assets/dinobattleroyale.png'

const Projects = () => {
  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src= {IMG1} alt="" />
          </div>
          <h3>Scheduler</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/TyreeWebber/scheduler" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src= {IMG2} alt="" />
          </div>
          <h3>Happy Eats</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/TyreeWebber/food-delivery-app" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src= {IMG3} alt="" />
          </div>
          <h3>Dino: Battle Royale</h3>
          <div className="portfolio__item-cta">
          <a href="https://github.com/TyreeWebber/lhl-final" className='btn btn-primary' target='_blank'>GitHub</a>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Projects