import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function Header() {

  return (
      <nav className='nav-wrapper'>
        <span className='nav-logo'><FaUser /></span>
        <ul className='nav-links'>
          <li><NavLink exact to="/" activeClassName="active">Home</NavLink></li>
          <li><NavLink to="/services" activeClassName="active">Services</NavLink></li>
          <li><NavLink to="/contact" activeClassName="active">Contact</NavLink></li>
        </ul>
      </nav>
  )
}

export default Header
