import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import {Link as a } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowDown } from 'react-icons/bs';
import Hero from '../../images/hero.jpeg'
import serviceThumb from '../../images/4-2.jpg'
import Thumbnail from '../../images/3-4.jpg'
import web from '../../images/web.jpg'
import mobile from '../../images/mobile.jpg'
import './banner.css'
import Popup from '../popup/Popup';

const Banner = () => {
	const [openWeb, setOpenWeb] = useState(false)
	const [openMobile, setOpenMobile] = useState(false)
	const [openSEO, setOpenSEO] = useState(false)
	

	const Open = () => {
		setOpenWeb(true) 
	}

	const OpenMobile = () => {
		setOpenMobile(true)
	}

	const OpenSEO = () => {
		setOpenSEO(true)
	}
	

	const Close = () => {
		setOpenWeb(false) || setOpenMobile(false) || setOpenSEO(false) 
	}
    return (
        <Wrapper id="home">
		<div className="kura_tm_hero">
			<div className="container">
				<div className="content">
					<div className="left">
						<span className="name">Peter Imoh Victor</span>
						<h3 className="job">Full Stack Developer Based in Nigeria</h3>
						<div className="services">
							<ul>
								<li>
									<a onClick={Open}>
										<span>Web Development</span>
										<AiOutlineArrowRight className='svg'/>
										</a>
										{openWeb ? <Popup closeWeb={Close}>
											<div className="popup_informations">
												<div className="image">
													<img src={serviceThumb} alt="placeholder" />
													<div className="main" data-img-url={web} style={{backgroundImage: `url(${web})`}}></div>
												</div>

												<div className="title"><h3>Web Development</h3></div>
											<div className="description">
												<p>Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>	
									</Popup> : null}
										
								</li>
								<li>
									<a onClick={OpenMobile}>
										<span>Mobile Development</span>
										<AiOutlineArrowRight className='svg'/>
										</a>
										{openMobile ? <Popup closeWeb={Close}>
											<div className="popup_informations">
												<div className="image">
													<img src={serviceThumb} alt="placeholder" />
													<div className="main" data-img-url={web} style={{backgroundImage: `url(${mobile})`}}></div>
												</div>

												<div className="title"><h3>Web Development</h3></div>
											<div className="description">
												<p>Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>	
									</Popup> : null}
								</li>
								<li>
									<a onClick={OpenSEO}>
										<span>Search Engine Optimization</span>
										<AiOutlineArrowRight className='svg'/>
										</a>
										{openSEO ? <Popup closeWeb={Close}>
											<div className="popup_informations">
												<div className="image">
													<img src={serviceThumb} alt="placeholder" />
													<div className="main" data-img-url={web} style={{backgroundImage: `url(${web})`}}></div>
												</div>

												<div className="title"><h3>Web Development</h3></div>
											<div className="description">
												<p>Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>	
									</Popup> : null}
								</li>
								
							</ul>
						</div>
						<div className="short_info">
							<ul>
								<li>
									<div className="list_inner">
										<h3>3+</h3>
										<span>Years of<br />Experience</span>
									</div>
								</li>
								<li>
									<div className="list_inner">
										<h3>20+</h3>
										<span>Happy<br />Customers</span>
									</div>
								</li>
							</ul>
						</div>
					</div>
					<div className="right">
						<div className="image">
							<img src={Thumbnail} alt="placeholder"/>
							<div className="main" data-img-url={Hero} style={{backgroundImage: `url(${Hero})`}}></div>
							<div className="shape"></div>
						</div>
					</div>
					<div className="down anchor">
							<a>
						<BsArrowDown className='svg'/>
							</a>
					</div> 
				</div>
			</div>
		</div>
	</Wrapper>
    )
}

const Wrapper = styled.div`
    width: 100%;
  height: auto;
  clear: both;
  float: left;

  .kura_tm_hero .container {
    min-height: 100%;
}

.kura_tm_hero .container {
    max-width: 1250px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    height: auto;
    padding: 0px 40px;
    position: relative;
    clear: both;
}

.kura_tm_hero .services ul li a {
  text-decoration: none;
  color: ${({ theme }) => theme.service};
  font-size: 17px;
  display: inline-block;
  padding: 8px 0px;
  position: relative;

  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

.kura_tm_hero .services ul li a:hover {
  color: orange;
}

.kura_tm_hero .services ul li a:hover .svg {
  transform: rotate(-50deg);
  color: orange !important;
}

`

export default Banner
