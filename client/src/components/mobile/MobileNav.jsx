import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Logo from '../../images/biglogo.png';
import './mobilenav.css'

const MobileNav = () => {
    return (
       	<Wrapper className="kura_tm_mobile_menu">
		<div className="mobile_menu_inner">
			<div className="mobile_in">
				<div className="logo">
					<Link to="#"><img src={Logo} alt="" /></Link>
				</div>
				<div className="trigger">
					<div className="hamburger hamburger--slider">
						<div className="hamburger-box">
							<div className="hamburger-inner"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div className="dropdown">
			<div className="dropdown_inner">
				<ul className="anchor_nav">
					<li className="current"><Link to="#home">Home</Link></li>
					<li><Link to="#portfolio">Portfolio</Link></li>
					<li><Link to="#skills">Skills</Link></li>
					<li><Link to="#timeline">Timeline</Link></li>
					<li><Link to="#price">Price</Link></li>
					<li><Link to="#news">News</Link></li>
					<li><Link to="#contact">Contact</Link></li>
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
  background-color: ${({ theme }) => theme.navbar};
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding: 15px 30px 15px 40px;
    }


`

export default MobileNav
