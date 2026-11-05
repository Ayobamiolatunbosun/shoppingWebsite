import React, { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'
import logo from './Assets/logo.png'
import cart_icon from './Assets/cart_icon.png'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const { cartCount } = useContext(ShopContext)
  const closeMenu = () => setMenuOpen(false)
  const navClass = ({ isActive }) => isActive ? 'nav-link active' : 'nav-link'

  return (
    <header className="navbar">
      <Link className="nav-logo" to="/" onClick={closeMenu} aria-label="Shopper home">
        <img src={logo} alt="" />
        <span>shopper<span className="brand-period">.</span></span>
      </Link>
      <button className="nav-toggle" type="button" aria-label="Toggle navigation" aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
        <span /><span /><span />
      </button>
      <nav className={`nav-menu${menuOpen ? ' nav-menu-open' : ''}`} aria-label="Main navigation">
        <NavLink to="/" end className={navClass} onClick={closeMenu}>Discover</NavLink>
        <NavLink to="/mens" className={navClass} onClick={closeMenu}>Men</NavLink>
        <NavLink to="/womens" className={navClass} onClick={closeMenu}>Women</NavLink>
        <NavLink to="/kids" className={navClass} onClick={closeMenu}>Kids</NavLink>
      </nav>
      <div className="nav-actions">
        <Link className="nav-account" to="/login">Sign in</Link>
        <Link className="nav-cart" to="/cart" aria-label={`Shopping bag, ${cartCount} items`}>
          <img src={cart_icon} alt="" />
          <span>Bag</span>
          <span className="nav-cart-count">{cartCount}</span>
        </Link>
      </div>
    </header>
  )
}

export default Navbar
