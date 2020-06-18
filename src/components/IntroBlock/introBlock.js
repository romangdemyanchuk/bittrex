import React from "react";
import './introBlock.css'
import emblem from "../../img/bitcoin..png";

const IntroBlock = () => {
    return (
        <div>
            <section className="intro-block">
                <div className="container">
                    <div className="intro-wrapper">
                        <div className="intro-heading">
                            DigiByte(DGB)
                        </div>
                        <div className="intro-last-info-wrapper">
                            <div className="price-wrapper">
                                <div className="intro-last-text">
                                    Last price
                                </div>
                                <div className="last-price">
                                    0.00000220 BTC
                                </div>
                            </div>
                            <div className="volume-wrapper">
                                <div className="intro-volume-text">
                                    24hr Volume
                                </div>
                                <div className="volume-from-last-day">
                                    209.20 BTC
                                </div>
                            </div>
                        </div>
                        <div className="intro-block-img">
                            <img src={emblem} alt="emblem" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="main-info">
                <div className="container">
                    <div className="block-content-wrapper">
                        <div className="block">
                            <div className="block-img">
                                <img src={emblem} alt="emblem"/>
                            </div>
                            <div className="block-text-wrapper">
                                <div className="block-subtitle">
                                    Top Volume
                                </div>
                                <div className="block-title">
                                    DigiByte(DGB)
                                </div>
                                <div className="block-price">
                                    210.35 BTC
                                </div>
                                <div className="block-growth">
                                    <div className="block-growth-wrapper">
                                        <div className="block-growth-wrapper-value">
                                        </div>
                                        <div className="block-growth-wrapper-up-or-down">
                                            <i className="fas fa-long-arrow-alt-down"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-img">
                                <img src={emblem} alt="emblem"/>
                            </div>
                            <div className="block-text-wrapper">
                                <div className="block-subtitle">
                                    Biggest % Gain
                                </div>
                                <div className="block-title">
                                    Factom(FCT)
                                </div>
                                <div className="block-price">
                                    9.13 BTC
                                </div>
                                <div className="block-growth">
                                    <div className="block-growth-wrapper">
                                        <div className="block-growth-wrapper-value">
                                            4.6
                                        </div>
                                        <div className="block-growth-wrapper-up-or-down">
                                            <i className="fas fa-long-arrow-alt-down"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-img">
                                <img src={emblem} alt="emblem"/>
                            </div>
                            <div className="block-text-wrapper">
                                <div className="block-subtitle">
                                    Biggest % Gain
                                </div>
                                <div className="block-title">
                                    DigiByte(DGB)
                                </div>
                                <div className="block-price">
                                    208.63 BTC
                                </div>
                                <div className="block-growth">
                                    <div className="block-growth-wrapper">
                                        <div className="block-growth-wrapper-value">
                                            9.3
                                        </div>
                                        <div className="block-growth-wrapper-up-or-down">
                                            <i className="fa fa-long-arrow-alt-down"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="block">
                            <div className="block-img">
                                <img src={emblem} alt="emblem"/>
                            </div>
                            <div className="block-text-wrapper">
                                <div className="block-subtitle">
                                    Top Volume
                                </div>
                                <div className="block-title">
                                    Crypto.com Coin
                                </div>
                                <div className="block-price">
                                    301.75 BTC
                                </div>
                                <div className="block-growth">
                                    <div className="block-growth-wrapper">
                                        <div className="block-growth-wrapper-value">
                                            -0.2
                                        </div>
                                        <div className="block-growth-wrapper-up-or-down">
                                            <i className="fas fa-long-arrow-alt-down"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
};
export default IntroBlock