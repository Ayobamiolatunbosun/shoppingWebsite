import React from 'react'
import './Footer.css'
import footer_logo from '../Assets/logo_big.png'
import instagram_icon from '../Assets//instagram_icon.png'
import pintester_icon from '../Assets/pintester_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer'>
      <Link to="/" className="footer-logo">
        <img src={footer_logo} alt=""/>
        <p>shopper<span>.</span></p>
      </Link>
      <ul className="footer-links">
        <li><Link to="/mens">Men</Link></li>
        <li><Link to="/womens">Women</Link></li>
        <li><Link to="/kids">Kids</Link></li>
        <li><Link to="/login">My account</Link></li>
        <li><a href="mailto:olatunbosuncars@gmail.com">Contact</a></li>
      </ul>
      <div className="footer-social-icon">
        <a className="footer-icons-container" href="https://instagram.com" aria-label="Instagram"><img src={instagram_icon} alt=""/></a>
        <a className="footer-icons-container" href="https://pinterest.com" aria-label="Pinterest"><img src={pintester_icon} alt=""/></a>
        <a className="footer-icons-container" href="https://wa.me/2348100094846" target="_blank" rel="noreferrer" aria-label="Chat with us on WhatsApp"><img src={whatsapp_icon} alt=""/></a>
      </div>
      <div className="footer-contact">
        <p>Need a hand? We’re right here.</p>
        <a href="https://wa.me/2348100094846" target="_blank" rel="noreferrer">WhatsApp <span>+234 810 009 4846</span></a>
        <a href="mailto:olatunbosuncars@gmail.com">Email <span>olatunbosuncars@gmail.com</span></a>
      </div>
      <div className="footer-copyright">
        <hr/>
        <p>© {new Date().getFullYear()} Shopper. Made for the everyday.</p>
      </div>
    </div>
  )
}

export default Footer
