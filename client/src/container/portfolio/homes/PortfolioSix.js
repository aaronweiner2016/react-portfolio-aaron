import React from 'react';
import SectionTitle from "../../../components/section-title/SectionTitleOne";
import PortfolioItem from "../../../components/portfolio/PortfolioItemOne";
import portfolios from "../../../data/portfolio/portfolio-three.json";

const PortfolioSix = () => {
    return (
        <div className="freelancer-portfolio">
            <SectionTitle
                heading={'Some of my works.'}
                className="heading-h2 font-50 font-400 line-height-1-62 text-lg-right"
            />
            {portfolios.map(portfolio => (
                <PortfolioItem
                    key={portfolio.id}
                    title={portfolio.title}
                    thumb={require('../../../assets/img/portfolio/grid/websites/' + portfolio.thumb)}
                    className="mt--70 wow move-up"
                />
            ))}
        </div>
    );
};

export default PortfolioSix;
