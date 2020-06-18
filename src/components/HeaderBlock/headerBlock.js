import React, {useState} from "react";
import './headerBlock.css'
import logo from "../../img/logo.png";

const HeaderBlock = () => {
    const [menuIsOpen, SetOnMenuClick] = useState(false);
    const SetOnClick = () => {
        SetOnMenuClick(!menuIsOpen)
    };
    return (
        <div>
            <header className="header-block">
                <div className="container">
                    <div className="header-wrapper">
                        <div className="header-left-part">
                            <div className="header-logo">
                                <img src={logo} alt="header-logo"/>
                            </div>
                            <div className="connection-info">
                                <div className="connection-icon"><i className="fa fa-wifi"/></div>
                                <div className="connection-text">Connected</div>
                            </div>
                        </div>
                        <div className="header-btn"
                             onClick={SetOnClick}
                        >
                            <i className="fa fa-filter"/>
                        </div>
                        <div className="header-right-part"
                             style={{display: menuIsOpen ? 'none' : 'block'}}>
                            <ul className="header-menu">
                                <li>Markets</li>
                                <li>Discover</li>
                                <li>Sign Up</li>
                                <li>Log In</li>
                            </ul>
                            <div className="flask-icon">
                                <i className="fa fa-flask"/>
                            </div>
                        </div>

                    </div>
                </div>
            </header>
        </div>
    )
};
export default HeaderBlock