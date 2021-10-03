import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import Logo from '../../images/biglogo.png';

const Navbar = () => {
  return (
    <header id='navbar'>
      <div className='site-logo'>
        <Link to='/'>
          <img src={Logo} alt='peter imoh logo' />
        </Link>
      </div>
      <div className='content'>
        <div className='navbar-nav'></div>
        <div className='navbar-control'></div>
      </div>
    </header>
  );
};

export default Navbar;
