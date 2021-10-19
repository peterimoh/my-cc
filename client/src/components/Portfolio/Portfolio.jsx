import React from 'react'
import PortfolioList from './PortfolioList'
import './portfolio.css'



const Portfolio = () => {
    return (
        <div className="kura_tm_section" id="portfolio">
		<div className="kura_tm_portfolio">
			<div className="container">
				<div className="kura_tm_main_title">
					<span>Portfolio</span>
					<h3>Selected Works</h3>
				</div>
				<PortfolioList/>
			</div>
		</div>
	</div>
    )
}

export default Portfolio
