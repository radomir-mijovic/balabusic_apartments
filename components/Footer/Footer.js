import React from 'react';
import {FooterStyled} from "./FooterStyled";

const Footer = () => {
    return (
        <FooterStyled>
            <div className="section-info">
                <div className="about">
                    <h3 className='section__h3'>About</h3>
                    <p className='section__p'>
                        Welcome to Alloggio, where comfort is everything. Beautiful room presentations, straightforward
                        booking & reservation options, & a whole lot more awaits here.
                    </p>
                </div>
                <div className="contact">
                    <h3 className='section__h3'>Contact</h3>
                    <p className='section__p'>
                        Address: Presernova 7, Budva
                    </p>
                    <p className='section__p'>
                        Phone: +382 67 431 105
                    </p>
                    <p className='section__p'>
                        Email: info@balabusic.com
                    </p>
                </div>
                <div className="payment">
                    <h3 className='section__h3'>Payment methods</h3>
                    <p className='section__p'>

                    </p>
                </div>
            </div>
            <div className="section-map">
                <a href="#">

                </a>
            </div>
        </FooterStyled>
    );
};

export default Footer;