import React from 'react';
import './Hero.css';
import arrow_icon from '../Assets/arrow.png';
import hero_image from '../Assets/hero_image.png';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
        <p className="hero-eyebrow">THE NEW SEASON IS HERE</p>
        <div>
          <div className="hero-hand-icon">
            <h1>Style that<br/><span>feels like you.</span></h1>
          </div>
          <p className="hero-copy">Easy, considered pieces for every day and every version of you.</p>
        </div>
        <Link className="hero-latest-btn" to="/womens">
          <span>Explore the collection</span><img src={arrow_icon} alt=""/>
        </Link>
      </div>
        
      <div className="hero-right">
        <img src={hero_image} alt="New-season fashion collection"/>
        <div className="hero-sticker"><span>GOOD<br/>THINGS</span><span>START HERE</span></div>
      </div>
    </div>
  )
}

export default Hero
