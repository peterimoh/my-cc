import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import { BsArrowLeft } from 'react-icons/bs'

const PortfolioList = () => {
    return (
     <div className="portfolio_list gallery_zoom wow fadeInUp" data-wow-duration=".7s">
					<div className="swiper-container">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src="img/portfolio/410-460.jpg" alt="" />
										<div className="main" data-img-url="img/portfolio/1.jpg"></div>
										<div className="overlay"></div>
										<BsArrowRight className='svg'/>
										<div className="details">
											<h3>Magic Art</h3>
											<span>Vimeo</span>
										</div>
									</div>
									<a className="kura_tm_full_link popup-vimeo" href="https://vimeo.com/337292310"></a>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src="img/portfolio/410-460.jpg" alt="" />
										<div className="main" data-img-url="img/portfolio/2.jpg"></div>
										<div className="overlay"></div>
										<BsArrowRight className='svg'/>
										<div className="details">
											<h3>Bona Green</h3>
											<span>Youtube</span>
										</div>
									</div>
									<a className="kura_tm_full_link popup-youtube" href="https://www.youtube.com/watch?v=7e90gBu4pas"></a>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src="img/portfolio/410-460.jpg" alt="" />
										<div className="main" data-img-url="img/portfolio/3.jpg"></div>
										<div className="overlay"></div>
										<img className="svg" src="img/svg/right-arrow.svg" alt="" />
										<div className="details">
											<h3>Leo Dandora</h3>
											<span>Soundcloud</span>
										</div>
									</div>
									<a className="kura_tm_full_link soundcloude_link mfp-iframe audio" href="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/471954807&color=%23ff5500&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></a>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src="img/portfolio/410-460.jpg" alt="" />
										<div className="main" data-img-url="img/portfolio/4.jpg"></div>
										<div className="overlay"></div>
										<img className="svg" src="img/svg/right-arrow.svg" alt="" />
										<div className="details">
											<h3>Folio Grasia</h3>
											<span>Detail</span>
										</div>
									</div>
									<a className="kura_tm_full_link portfolio_popup" href="#"></a>
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
										<img src="img/portfolio/410-460.jpg" alt="" />
										<div className="main" data-img-url="img/portfolio/5.jpg"></div>
										<div className="overlay"></div>
										<img className="svg" src="img/svg/right-arrow.svg" alt="" />
										<div className="details">
											<h3>Viva Mercury</h3>
											<span>Image</span>
										</div>
									</div>
									<a className="kura_tm_full_link zoom" href="img/portfolio/5.jpg"></a>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="list_inner">
									<div className="image">
										<img src="img/portfolio/410-460.jpg" alt="" />
										<div className="main" data-img-url="img/portfolio/6.jpg"></div>
										<div className="overlay"></div>
										<img className="svg" src="img/svg/right-arrow.svg" alt="" />
										<div className="details">
											<h3>Santa Onera</h3>
											<span>Image</span>
										</div>
									</div>
									<a className="kura_tm_full_link zoom" href="img/portfolio/6.jpg"></a>
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
