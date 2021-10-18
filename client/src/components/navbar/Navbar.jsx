import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { data } from '../../data/links';
import { useDispatch, useSelector } from 'react-redux';
import { DarkTheme } from '../../store/actions/themeAction';
import { FiSun } from 'react-icons/fi';
import { MdNightsStay } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Logo from '../../images/biglogo.png';
import Audio1 from '../../audio/1.mp3'
import Audio2 from '../../audio/2.mp3'
import './navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState('')
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

  
  let audio_one = new Audio(Audio1)
  let audio_two = new Audio(Audio2)

  const handleMenuOpen = () => {
    setMenuOpen(true)
    console.log(menuOpen);
    audio_one.play()
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
    audio_two.play()
  }

  

  return (
    <Wrapper className='kura_tm_topbar'>
      <div className='wrapper'>
        <div className='topbar_inner'>
          <div className='logo'>
            <Link to='/'>
              <img src={Logo} alt='Logo' />
            </Link>
          </div>
          <div className='menu'>
            <div className='list'>
              <ul className='anchor_nav'>
                {data.map(x => {
                  const { id, url, page } = x
                  return(<li className={ `${menuOpen ? ' opened' : ''}`} key={id}>
                  <Link to={url}>{page}</Link>
                </li>)
                })}
              </ul>
            </div>
            <div className='trigger'>
              <div className='hamburger hamburger--slider'>
                <div className='hamburger-box'>
                  <div className='hamburger-inner'></div>
                </div>
              </div>
              {themeToggle === 'light' ? (
                <MdNightsStay onClick={() => setTheme('dark')} />
              ) : (
                <FiSun onClick={() => setTheme('light')} />
              )}
              <div className="space"></div>
              {!menuOpen ?  <GiHamburgerMenu onClick={handleMenuOpen} /> :  <AiOutlineClose onClick={handleMenuClose} />}
             
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
.space{
  margin: 10px;
  }
  
  a {
    color: ${({ theme }) => theme.a} !important;
  }
  `;
  
  // background-color: ${({ theme }) => theme.navbar};
export default Navbar;
