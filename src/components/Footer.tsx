import React from 'react';
import PropTypes from 'prop-types';

import "./index.styles"
import FooterGameloft from '../assets/image/footer/Gameloft';
import FooterGroupFollow from '../assets/image/footer/groupFollow';
import Countries from '../assets/image/footer/Countries';

function Footer() {
    return (
        <footer>
            <div className="footer_top">
                    <h4>Follow Us</h4>
                    <FooterGroupFollow />
                </div>
            <div className="container">
                
                <div className="footer__content">
                    <div className="footer__content-left">
                        <div className="footer__logo">
                            <FooterGameloft />
                        </div>
                       <div className="footer-mid">
                       <h4>Follow Us</h4>
                        <div className="footer__gr">
                            <FooterGroupFollow />
                        </div>
                        <Countries />
                       </div>
                    </div>
                    <div className="footer__content-right">
                       <div className="footer__content-title">
                            <h5>
                                Visit
                            </h5>
                        </div>
                        <div className="footer__content-list">
                            <ul>
                                <li>Gameloft game </li>
                                <li>Gameloft  1</li>
                                <li>Gameloft  News</li>
                                <li>Gameloft forums</li>
                                <li>Gameloft </li>
                                <li>Gameloft </li>
                                <li>Gameloft Support</li>
                            </ul>
                        </div>


                        <div className="footer__content-title">
                            <h5>
                                Legal
                            </h5>
                        </div>
                        <div className="footer__content-list">
                            <ul>
                                <li>Terms of use</li>
                                <li>Privary Policy  1</li>
                                <li>Gameloft  2</li>
                                <li>Gameloft  3</li>
                                <li>Gameloft </li>
                                <li>Gameloft </li>
                                <li>Gameloft  7</li>
                            </ul>
                        </div>
                    </div>

                </div>


            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className='footer__bottom-text'>
                        <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ratione maiores minus modi sed repellat soluta dolores repellendus exercitationem aspernatur. Cumque suscipit deserunt assumenda dolorum excepturi doloremque, vel nihil nostrum.</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;