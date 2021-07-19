import React from 'react';
// import profilePic from '../../assets/img/about/about-7.jpg';
import profilePic from "../../assets/img/Aaron/plantMe.jpg"

const AboutFreelancer = () => {
    return (
        <div className="freelancer-about-area pb--130">
            <div className="inner wow move-up">
                <h2 className="heading heading-h2 font-50 font-400 line-height-1-62">
                    <span className="theme-color">Hello. </span>
                    My name is Aaron Weiner.
                </h2>
                <div className="thumb mt--55">
                    <img className="w-100" src={profilePic} alt="about" />
                </div>
                <div className="bk-separator--40" />
                <h4 className="heading heading-h4">About me</h4>
                <div className="bk-separator--30" />
                <p className="bk_pra">
                    In 2020 i started getting more into online jobs and found a way to sell bitcoin. When the market
                    became difficult to navigate, I decided to
                    join the UNCC Full Stack Bootcamp for web development. In this class I have learned how to utilize HTML,
                    CSS, Vanilla Javascript, Jquery, MySQL, Sequelize, Express.js, Node.js and Handlebars. My best tool I was able to learn
                    was create a full stack application in React.js.
                    I also learned how to utilize Bootstrap, Bulma and various other tools to help with front end
                    functionality.
                </p>
                <div className="bk-separator--40" />
                <div className="signature">
                    <a href="https://fontmeme.com/cursive-fonts/"><img src="https://fontmeme.com/permalink/210717/9845618feaa24fbaa2899991af116fd9.png" alt="cursive-fonts" border="0" /></a>
                </div>

            </div>
        </div>
    );
};

export default AboutFreelancer;
