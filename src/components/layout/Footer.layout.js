import React from 'react'
import Logo from '../../Logo.svg';
import './css/Footer.css'

function Footer() {
    return (
        <footer className="footer">
            <div className="footer__sitemap">
                <ul>
                    <li>Home</li>
                    <li>Account Page</li>
                    <li>New Editor</li>
                    <li>Contact Us</li>
                </ul>
            </div>
            <div className="footer__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <div className="footer__social">
                <ul>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Linkedin</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
