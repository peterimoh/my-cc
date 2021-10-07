import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/biglogo.png';
import { useDispatch, useSelector } from 'react-redux';
import { DarkTheme, LightTheme } from '../../store/actions/themeAction';
import { FiSun } from 'react-icons/fi';
import { MdNightsStay } from 'react-icons/md';
import './navbar.scss';

const Navbar = () => {
  const themeToggle = useSelector((state) => state.themeToggle);
  const { darkTheme } = themeToggle
  console.log(darkTheme);

  const dispatch = useDispatch();

  const setDarkTheme = () => {
    dispatch(DarkTheme());
  };

  const setLightTheme = () => {
    dispatch(LightTheme());
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
          {darkTheme ? (
            <FiSun onClick={setDarkTheme} />
          ) : (
            <MdNightsStay onClick={setLightTheme} />
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
