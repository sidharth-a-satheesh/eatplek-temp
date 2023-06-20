import React, { useState } from 'react'
import './navbar.scss'
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  // return (
  //   <nav className='navbar-main'>
  //       <NavLink className='nav-item' to='/'>Home</NavLink>
  //       <NavLink className='nav-item' to='/about'>About Us</NavLink>
  //       <NavLink className='nav-item' to='/privacy'>Privacy Policy</NavLink>
  //       <NavLink className='nav-item' to='/terms'>Terms & conditions</NavLink>
  //       <NavLink className='nav-item' to='/contact'>Contact Us</NavLink>
  //   </nav>
  const [viewNav, setViewNav] = useState(false);
  // const navRef = useRef();
  const showNavbar = () => {
    setViewNav(!viewNav);
    // navRef.current.classList.toggle("responsive-nav");
  };

  return (
    <header className='header-sub'>
      {/* <Link to="/">
        <img className="nav-logo" src={logo} alt="" />
      </Link> */}
      <div className="nav">
        <nav className={viewNav ? "responsive-nav" : "nav-sub-link"}>
          <Link className="nav-link" to="/">
            Home
          </Link>
          {/* <Link className="nav-link" to="/about">
            About Us
          </Link> */}
          <Link className="nav-link" to="/privacy">
          Privacy Policy
          </Link>
          <Link className="nav-link" to="/terms">
          Terms & conditions
          </Link>
          <Link className="nav-link" to="/contact">
          Contact Us
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </div>
    </header>

  )
}

export default Navbar