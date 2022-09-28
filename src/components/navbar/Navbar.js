import React from 'react'
import './navbar.scss'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar-main'>
        <NavLink className='nav-item' to='/'>Home</NavLink>
        <NavLink className='nav-item' to='/about'>About Us</NavLink>
        <NavLink className='nav-item' to='/privacy'>Privacy Policy</NavLink>
        <NavLink className='nav-item' to='/terms'>Terms & conditions</NavLink>
        <NavLink className='nav-item' to='/contact'>Contact Us</NavLink>
    </nav>
  )
}

export default Navbar