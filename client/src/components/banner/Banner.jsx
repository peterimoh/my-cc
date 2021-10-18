import React, {useState} from 'react'
import styled from 'styled-components'
import Modal from 'react-modal'
import {Link } from 'react-router-dom'
import { AiOutlineArrowRight } from 'react-icons/ai';
import { BsArrowDown } from 'react-icons/bs';
import Hero from '../../images/hero.jpeg'
import serviceThumb from '../../images/4-2.jpg'
import Thumbnail from '../../images/3-4.jpg'
import './banner.css'
import Popup from '../popup/Popup';

const Banner = () => {
	// const [modalIsOpen, setModalIsOpen] = useState(false)

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
									<Link href="#">
										<span>Web Development</span>
										<AiOutlineArrowRight className='svg'/>
									</Link>
										{/* <Popup>
									
										
											<div className="popup_informations">
												<div className="image">
													<img src={serviceThumb} alt="placeholder" />
													<div className="main" data-img-url="img/service/1.jpg" style={{ backgroundImage: "url('img/service/1.jpg')" }}></div>
												</div>

												<div class="title"><h3>Web Development</h3></div>
											<div className="description">
												<p>Kura is a leading web design agency with an award-winning design team that creates innovative, effective websites that capture your brand, improve your conversion rates, and maximize your revenue to help grow your business and achieve your goals.</p>
												<p>In today’s digital world, your website is the first interaction consumers have with your business. That's why almost 95 percent of a user’s first impression relates to web design. It’s also why web design services can have an immense impact on your company’s bottom line.</p>
												<p>That’s why more companies are not only reevaluating their website’s design but also partnering with Kura, the web design agency that’s driven more than $2.4 billion in revenue for its clients. With over 50 web design awards under our belt, we're confident we can design a custom website that drives sales for your unique business.</p>
											</div>
										</div>
								
											
									</Popup> */}
								</li>
								<li>
									<Link to="#">
										<span>Mobile Development</span>
										<AiOutlineArrowRight className='svg'/>
										</Link>
										{/* <Popup>
										<img className="image" src={serviceThumb} alt="" />

								
										<div className="popup_informations">
											<div className="description">
												<p>SEO is always at the top of any digital marketing agency services list. That’s because it affects all your online marketing strategies. SEO is vital to ensure your website shows up in online searches. Without effective SEO, prospective customers may never get to see any of your digital marketing efforts. That’s because search engines have the power to choose which websites appear when people conduct online searches.</p>
												<p> They decide this based on complex algorithms that weigh up numerous criteria to determine if your website is what the searcher is looking for. In simple terms, SEO means optimizing all your online content so that’s it’s easily discoverable by these search engines. For example, if you’re selling socks, you want the search engines to present your website first when people type ‘’socks’’ into their search bar. It makes sense that thousands of websites would have a term like ‘socks’ associated with them. That’s why it’s important to use the services of a digital marketing agency to help you stand out amongst the competition.</p>
											</div>
										</div>
									
										</Popup> */}
								</li>
								<li>
									<Link href="#">
										<span>Search Engine Optimization</span>
										<AiOutlineArrowRight className='svg'/>
										</Link>
										 {/* <Popup>

										<img className="image" src={serviceThumb} alt="" />

										<div className="popup_informations">
											<div className="description">
												<p>Visual content converts faster than words alone. Content marketing strategies powered by dynamic media outperform all others, and with a variety of visual assets supporting your marketing, we turn your brand into an ROI engine. Attract a larger audience, nurture high-intent prospects and enhance customer engagement with design that matters.</p>
												<p>Visualize complex data, intuitive concepts and compelling narratives with infographics of every size. Our expert designers synthesize dense information and transform it into engaging graphical stories that your audience will retain in seconds and remember for weeks. Want to stay top of mind?Infographics are shared or liked on social media 3X more often than other content types. Brafton graphic design services make infographic.</p>
											</div>
										</div>
										
										</Popup>  */}
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
						<div class="image">
							<img src={Thumbnail} alt="placeholder"/>
							<div class="main" data-img-url={Hero} style={{backgroundImage: `url(${Hero})`}}></div>
							<div class="shape"></div>
						</div>
					</div>
					<div className="down anchor">
							<Link>
						<BsArrowDown className='svg'/>
							</Link>
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
