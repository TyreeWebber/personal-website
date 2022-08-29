import React, { useState } from 'react'
import './projects.css'
import Carousel from 'react-bootstrap/Carousel';
import IMG1 from '../../assets/scheduler.png'
import IMG2 from '../../assets/happyeats.png'
import IMG3 from '../../assets/dinobattleroyale.png'



function Projects() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <section id='projects'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="scheduler"
          src={IMG1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='first-slide'>Scheduler</h3>
          <a href="https://github.com/TyreeWebber/scheduler" className='btn btn-primary'>GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="happyeats"
          src={IMG2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Happy Eats</h3>
          <a href="https://github.com/TyreeWebber/food-delivery-app" className='btn btn-primary'>GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="dino"
          src={IMG3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Dino: Battle Royale</h3>
          <a href="https://github.com/TyreeWebber/lhl-final" className='btn btn-primary'>GitHub</a>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </section>
  )
}

export default Projects