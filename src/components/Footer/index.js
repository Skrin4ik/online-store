import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {

    const logo = require('./../../assets/img/icon/logo.svg').default;
    const instagram = require('./../../assets/img/social/instagram.svg').default;
    const facebook = require('./../../assets/img/social/fb.svg').default;
    const vk = require('./../../assets/img/social/vk.svg').default;

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-block">
                    <Link to="/" className="logo footer-logo">
                        <img src={logo} alt="logo"/>
                    </Link>
                    <nav className="footer-nav">
                        <Link to="/" className="footer-link">Ресторанам</Link>
                        <Link to="/" className="footer-link">Курьерам</Link>
                        <Link to="/" className="footer-link">Пресс-центр</Link>
                        <Link to="/" className="footer-link">Контакты</Link>
                    </nav>
                    <div className="social-links">
                        <Link to="/" className="social-link">
                            <img src={instagram} alt="instagram"/>
                        </Link>
                        <Link to="/" className="social-link">
                            <img src={facebook} alt="facebook"/>
                        </Link>
                        <Link to="/" className="social-link">
                            <img src={vk} alt="vk"/>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;