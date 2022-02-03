import React from 'react'
import Port410 from '../../images/portfolio/410-460.jpg'
import { BsArrowRight } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'
import './portfolioList.css'

const PortfolioList = () => {
    return (
     <div className="portfolio_list gallery_zoom wow fadeInUp" data-wow-duration=".7s">
					<div className="swiper-container">
						<div className="swiper-wrapper">
						
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src={Port410} alt="" />
										<div className="main" data-img-url="img/portfolio/4.jpg"></div>
										<div className="overlay"></div>
										<BsArrowRight className="svg" />
										<div className="details">
											<h3>Folio Grasia</h3>
											<span>Detail</span>
										</div>
									</div>
									{/* <a className="kura_tm_full_link portfolio_popup" href="#"></a> */}
									<div className="hidden_content">
										<div className="popup_details">
											<div className="main_details">
												<div className="textbox">
													<p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.</p>
													<p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.</p>
												</div>
												<div className="detailbox">
													<ul>
														<li>
															<span className="first">Client</span>
															<span>Alvaro Morata</span>
														</li>
														<li>
															<span className="first">Category</span>
															<span><a href="#">Detail</a></span>
														</li>
														<li>
															<span className="first">Date</span>
															<span>March 07, 2021</span>
														</li>
														<li>
															<span className="first">Share</span>
															<ul className="share">
																<li><a href="#"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
											<div className="additional_images">
												<ul>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/1.jpg"></div>
															</div>
														</div>
													</li>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/2.jpg"></div>
															</div>
														</div>
													</li>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/3.jpg"></div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src={Port410} alt="" />
										<div className="main" data-img-url="img/portfolio/4.jpg"></div>
										<div className="overlay"></div>
										<BsArrowRight className="svg" />
										<div className="details">
											<h3>Folio Grasia</h3>
											<span>Detail</span>
										</div>
									</div>
									{/* <a className="kura_tm_full_link portfoli/o_popup" href="#"></a> */}
									<div className="hidden_content">
										<div className="popup_details">
											<div className="main_details">
												<div className="textbox">
													<p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.</p>
													<p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.</p>
												</div>
												<div className="detailbox">
													<ul>
														<li>
															<span className="first">Client</span>
															<span>Alvaro Morata</span>
														</li>
														<li>
															<span className="first">Category</span>
															<span><a href="#">Detail</a></span>
														</li>
														<li>
															<span className="first">Date</span>
															<span>March 07, 2021</span>
														</li>
														<li>
															<span className="first">Share</span>
															<ul className="share">
																<li><a href="#"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
											<div className="additional_images">
												<ul>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/1.jpg"></div>
															</div>
														</div>
													</li>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/2.jpg"></div>
															</div>
														</div>
													</li>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/3.jpg"></div>
															</div>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src={Port410} alt="" />
										<div className="main" data-img-url="img/portfolio/4.jpg"></div>
										<div className="overlay"></div>
										<BsArrowRight className="svg" />
										<div className="details">
											<h3>Folio Grasia</h3>
											<span>Detail</span>
										</div>
									</div>
									{/* <a className="kura_tm_full_link portfolio_popup" href="#"></a> */}
									<div className="hidden_content">
										<div className="popup_details">
											<div className="main_details">
												<div className="textbox">
													<p>We live in a world where we need to move quickly and iterate on our ideas as flexibly as possible. Building mockups strikes the ideal balance between true-life representation of the end product and ease of modification.</p>
													<p>Mockups are useful both for the creative phase of the project - for instance when you're trying to figure out your user flows or the proper visual hierarchy - and the production phase when they will represent the target product. Making mockups a part of your creative and development process allows you to quickly and easily ideate.</p>
												</div>
												<div className="detailbox">
													<ul>
														<li>
															<span className="first">Client</span>
															<span>Alvaro Morata</span>
														</li>
														<li>
															<span className="first">Category</span>
															<span><a href="#">Detail</a></span>
														</li>
														<li>
															<span className="first">Date</span>
															<span>March 07, 2021</span>
														</li>
														<li>
															<span className="first">Share</span>
															<ul className="share">
																<li><a href="#"><img className="svg" src="img/svg/social/facebook.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/twitter.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/instagram.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/dribbble.svg" alt="" /></a></li>
																<li><a href="#"><img className="svg" src="img/svg/social/tik-tok.svg" alt="" /></a></li>
															</ul>
														</li>
													</ul>
												</div>
											</div>
											{/* <div className="additional_images">
												<ul>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/1.jpg"></div>
															</div>
														</div>
													</li>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/2.jpg"></div>
															</div>
														</div>
													</li>
													<li>
														<div className="list_inner">
															<div className="my_image">
																<img src="img/thumbs/4-2.jpg" alt="" />
																<div className="main" data-img-url="img/portfolio/3.jpg"></div>
															</div>
														</div>
													</li>
												</ul>
											</div> */}
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="kura_tm_swiper_progress fill">
							<div className="my_pagination_in">
								<span className="current"></span>
								<span className="pagination_progress"><span className="all"><span></span></span></span>
								<span className="total"></span>
							</div>
							<div className="my_navigation">
								<ul>
									<li><a className="my_prev" ><BsArrowRight className='svg'/></a></li>
									<li><a className="my_next"><BsArrowRight className='svg'/></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
    )
}

export default PortfolioList
