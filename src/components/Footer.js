import React from 'react'
import PropTypes from "prop-types"


const Footer = () => (
    <div className="site-footer">
        <h4 className="text-center">
            {'< jrDevsBlog />'}
        </h4>
        <p className="text-center">Follow us on social media</p>
        <div className="footer-social-links">
            <ul className="social-links-list">
                <li>
                    <a href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreffer"
                    className="facebook">
                        <i className="fab fa-facebook-f fa-2x"></i>
                    </a> 
                </li>
                <li>
                    <a href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreffer"
                    className="twitter">
                        <i className="fab fa-twitter fa-2x"></i>
                    </a> 
                </li>
                <li>
                    <a href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreffer"
                    className="instagram">
                        <i className="fab fa-instagram fa-2x"></i>
                    </a> 
                </li>
                <li>
                    <a href="https://facebook.com" 
                    target="_blank" 
                    rel="noopener noreffer"
                    className="linkedin">
                        <i className="fab fa-linkedin fa-2x"></i>
                    </a> 
                </li>
            </ul>    
        </div>
    </div>
)

export default Footer