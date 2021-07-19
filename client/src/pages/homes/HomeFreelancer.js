import React, { Fragment, useEffect, useState } from 'react';
import { Helmet } from "react-helmet";
import brook from "../../data/brook.json";

import LayoutDefault from "../../layouts/LayoutDefault";
// import Header from "../../components/header/HeaderFive";
import PopupSearch from "../../components/popup/PopupSearch";
import PopupMobileMenu from "../../components/popup/PopupMobileMenu";
import FreelancerContent from "../../layouts/LayoutFreelancer";
import Footer from "../../container/footer/FooterSix";
import API from "../../lib/API"

const HomeFreelancer = () => {

    const [projects, setProjects] = useState([])

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.Projects.getProjects()
            .then(res => {
                console.log("SUCCESS", res)
                // setProjects(res.data.Meetings)
            })
            .catch(err => console.log("ERROR", err));
    };


    return (
        <Fragment>
            <Helmet>
                <title>{`Freelancer || ${brook.title}`}</title>
            </Helmet>
            <LayoutDefault className="template-color-4 template-font-1 bg_color--1" revealFooter={true}>
                {/* <Header /> */}
                <PopupSearch />
                <PopupMobileMenu />
                <FreelancerContent />
            </LayoutDefault>
            <Footer />
        </Fragment>
    );
};

export default HomeFreelancer;