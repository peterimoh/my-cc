import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/biglogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { DarkTheme } from '../../store/actions/themeAction';
import { FiSun } from 'react-icons/fi';
import { MdNightsStay } from 'react-icons/md';
import './navbar.scss';

const Navbar = () => {
  const themeToggle = useSelector((state) => state.themeToggle.darkTheme);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!themeToggle) {
      dispatch(DarkTheme(window.localStorage.getItem('theme')));
    }
  }, [themeToggle, dispatch]);

  const setTheme = (value) => {
    window.localStorage.setItem('theme', value);
    dispatch(DarkTheme(value));
  };

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
                <Link>about</Link>
              </li>
              <li>
                <Link>Login</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div className='navbar-control'>
          {themeToggle === 'light' ? (
            <MdNightsStay onClick={() => setTheme('dark')} />
          ) : (
            <FiSun onClick={() => setTheme('light')} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
