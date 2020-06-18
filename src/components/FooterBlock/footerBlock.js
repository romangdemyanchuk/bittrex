import React from "react";
import './footerBlock.css'

const FooterBlock = () => {
    return (
        <div>
            <footer className="footer">
                <div className="container">
                    <div className="footer-wrapper">
                        <div className="footer-line-wrapper">
                            <div className="footer-first-line">
                                <div>About</div>
                                <div>Cookies</div>
                                <div>Fees</div>
                                <div>Support</div>
                                <div>News</div>
                                <div className="footer-twitter">
                                    <div className="twitter-icon">
                                        <i className="fa fa-twitter" aria-hidden="true"/>
                                    </div>
                                    <div className="twitter-text">
                                        Follow us on Twitter
                                    </div>
                                </div>
                            </div>
                            <div className="footer-second-line">
                                <div>Privacy</div>
                                <div>API Documentation</div>
                                <div>Terms</div>
                                <div>Website Status</div>
                                <div>Contact</div>
                                <div className="footer-facebook">
                                    <div className="facebook-icon">
                                        <i className="fa fa-facebook-square"/>
                                    </div>
                                    <div className="facebook-text">
                                        Like us on Facebook
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="footer-last-text">
                            2020 Bittrex Internetional Gmbh
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
};
export default FooterBlock