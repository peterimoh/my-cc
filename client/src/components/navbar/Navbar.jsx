import React from 'react';
import { Link } from 'react-router-dom';
import { FiSun } from 'react-icons/fi';
import './navbar.scss';
import Logo from '../../images/biglogo.png';

const Navbar = () => {
  return (
    <header id='navbar'>
      <div className='site-logo'>
        <Link to='/'>
          <img src={Logo} alt='peter imoh logo' className='logo' />
        </Link>
      </div>
      <div className='content'>
        <div className='navbar-nav'>
          <nav className='nav-links'>
            <ul>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
              <li>
                <Link>Home</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='navbar-control'>
          <FiSun />
        </div>
      </div>
    </header>
  );
};

export default Navbar;
