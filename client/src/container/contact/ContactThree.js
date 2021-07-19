import React from 'react';
import SectionTitle from "../../components/section-title/SectionTitleOne";
// import socialIcons from '../../data/socials';
// import SocialIconItem from "../../components/social-icon";

const ContactThree = () => {
    return (
        <div className="freelancer-contact-area pb--100">
            <div className="contact-inner">
                <SectionTitle
                    heading={'Message Me.'}
                    className="heading-h2 font-50 font-400 line-height-1-62"
                />
                <div className="content">
                    <div className="bk-separator--25" />
                    <p className="bk_pra pr--40 wow move-up">
                        If you have any questions at all about starting a website after looking through my portfolio, please do not hesitate to contact me below.
                    </p>
                    <div className="freelancer-contact mt--40">
                        <h5 className="heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up">
                            <a href={`${process.env.PUBLIC_URL + "/"}`}>aaronjacobweiner@yahoo.com</a>
                        </h5>
                        <div className="bk-separator--20" />
                        <h5 className="heading bk-hover heading-h5 font-400 line-height-1-39 wow move-up">
                            <a href={`${process.env.PUBLIC_URL + "/"}`}>(704) 778-2171</a>
                        </h5>
                        <div className="view-more-btn heading-color font-600 mt--55 wow move-up">
                            <a href={`${process.env.PUBLIC_URL + "/"}`}>
                                <span>More details</span>
                                <span className="btn-arrow" />
                            </a>
                        </div>
                        {/* <ul className="social-icon icon-solid-rounded icon-size-medium text-center">
                            {socialIcons.map(icon => (
                                console.log(icon),
                                <SocialIconItem
                                    key={icon.id}
                                    type={'icon'}
                                    socialMedia={icon.media}
                                    username={icon.username}
                                    className={"link"}
                                />
                            ))}
                        </ul> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactThree;
