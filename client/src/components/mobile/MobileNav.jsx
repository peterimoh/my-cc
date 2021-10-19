import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import $ from 'jquery'
import {data} from '../../data/links'
import { FiSun } from 'react-icons/fi';
import { MdNightsStay } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';
import Audio1 from '../../audio/1.mp3'
import Audio2 from '../../audio/2.mp3'

import Logo from '../../images/biglogo.png';
import { DarkTheme } from '../../store/actions/themeAction';
import './mobilenav.css'

const MobileNav = () => {

  const [menuOpen, setMenuOpen] = useState(false)
  
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
    
	let list= $('.kura_tm_topbar .list ul li');
	let mobileMenu		= $('.kura_tm_mobile_menu .dropdown');

  const handleMenuOpen = () => {
    setMenuOpen(!false)
    console.log(menuOpen);
      audio_one.play()
      list.each(function(i){
				var ele = $(this);
				setTimeout(function(){ele.addClass('opened');},i*50);
			});
      mobileMenu.slideDown();
  }

  const handleMenuClose = () => {
    setMenuOpen(false)
      console.log(menuOpen);
      audio_two.play()
      list.removeClass('opened');
	mobileMenu.slideUp();
  }
    

    return (
       	<Wrapper className="kura_tm_mobile_menu">
		<div className="mobile_menu_inner">
			<div className="mobile_in">
				<div className="logo">
					<Link to="/"><img src={Logo} alt="logo" /></Link>
				</div>
				<div className="trigger">
					<div className="hamburger hamburger--slider">
						<div className="hamburger-box">
							<div className="hamburger-inner"></div>
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
		<div className="dropdown">
			<div className="dropdown_inner">
				<ul className="anchor_nav">
              {data.map(x => {
                const { id, page, url } = x
                return (<li key={id}><Link to={url}>{ page}</Link></li>)
              })}
				</ul>
			</div>
		</div>
	</Wrapper>
    )
}

const Wrapper = styled.div`

 width: 100%;
  height: auto;
  position: fixed;
  top: 0px;
  left: 0px;
  display: none;
  z-index: 10;

 

.mobile_menu_inner{
  width: 100%;
  height: auto;
  float: left;
  clear: both;
 background-color:${({ theme }) => theme.navbar};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 30px 15px 40px;
    }

 .space{
    margin: 10px;
  }

.dropdown{
    width: 100%;
  height: auto;
  clear: both;
  float: left;
  background-color:${({ theme }) => theme.navbar};
  display: none;
}

.dropdown .dropdown_inner ul li a {
  text-decoration: none;
  color: ${({ theme }) => theme.mobileNavLink};
  display: inline-block;
  padding: 0px 0px;
  font-family: 'Poppins';
  font-weight: 500;
}

`
 // background-color: ${({ theme }) => theme.navbar};
export default MobileNav
