import React from 'react';
import { Col, Row } from "react-bootstrap";
import About from "../container/about-us/AboutFreelancer";
import Contact from "../container/contact/ContactThree";
import Portfolios from "../container/portfolio/homes/PortfolioSix";
import ContactFormTwo from "../components/forms/ContactFormTwo";

const LayoutFreelancer = () => {
    return (
        <main className="page-content">
            <div className="freelancer-wrapper bg-light">
                <Row>
                    <Col lg={6}>
                        <div className="freelancer-left">
                            <About />
                            <Contact />
                            <Col xs={12} lg={12} className="mb-5 p-0">
                                <ContactFormTwo />
                            </Col>
                        </div>
                    </Col>
                    <Col lg={6}>
                        <div className="freelancer-right pb--100">
                            <Portfolios />
                        </div>
                    </Col>
                </Row>
            </div>
        </main>
    );
};

export default LayoutFreelancer;
