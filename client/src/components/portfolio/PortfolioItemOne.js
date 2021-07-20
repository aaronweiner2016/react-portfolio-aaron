import React, { useState, useEffect } from 'react';
import API from "../../lib/API"

const PortfolioItemOne = ({ className, thumb, title, key }) => {

    const [projects, setProjects] = useState([])
    const [projectTitle, setProjectTitle] = useState([])

    useEffect(() => {
        loadProjects()
    }, [])

    function loadProjects() {
        API.Projects.getProjects()
            .then(res => {
                console.log("SUCCESS")
                console.log(res.data.Meetings)
                setProjects(res.data.Meetings)
            })
            .catch(err => console.log("ERROR", err));
    };

    console.log(projects, projectTitle)

    function getTitle(e) {
        console.log(e.target.textContent)
        setProjectTitle(e.target.textContent)
    }
    console.log("key", key)
    return (
        <div className={`portfolio portfolio_style--1 ${className}`}>
            <div className="thumb">
                <img src={thumb} alt={title} />
            </div>
            <div className="port-overlay-info">
                <div className="hover-action">
                    <h3 className="post-overlay-title">
                        <button
                            onClick={(e) => getTitle(e)}
                            style={{ border: "none" }}
                        >

                            <a
                            // href={`${process.env.PUBLIC_URL + '/portfolio-right-details/' + projectTitle}`}
                            >
                                {title}
                            </a>
                        </button>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default PortfolioItemOne;
