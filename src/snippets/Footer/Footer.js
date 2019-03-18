import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Footer extends Component {
    render() {
        return (

            <div className="footer-main-wrapper">
                <div className="footer">
                    <ul className="connect-with-us">
                        <li className="footer-header">Connect With Us</li>
                        <li><a href="https://www.facebook.com/vyaparApp/">Facebook</a></li>
                        <li><a href="https://twitter.com/vyaparapp">Twitter</a></li>
                        <li><a href="https://www.instagram.com/vyaparapp/">Instagram</a></li>
                        <li><a href="http://vyaparapp.in/blog">Blog</a></li>
                        <li><a href="https://vyaparapp.in/about-us">About Us</a></li>
                    </ul>
                    <ul className="let-us-help">
                        <li className="footer-header">Let us help you</li>
                        <li><a href="https://vyaparapp.in/home">Your Account</a></li>
                        <li><a href="https://vyaparapp.in#contact">Contact Us</a></li>
                        <li><a href="https://vyaparapp.in/desktop">Desktop Download</a></li>
                        <li><a href="https://www.youtube.com/channel/UCPyg1bziA6iTfjjX-IwGlhQ">Video Tutorials</a></li>
                    </ul>
                    <ul className="become-reseller">
                        <li className="footer-header">Become a Reseller</li>
                        <li><a href="https://vyaparapp.in/distributor/create">Partnership / Distributorship</a></li>
                        <li><a href="https://vyaparapp.in/distributors">Our Partners</a></li>
                    </ul>
                    <ul className="features">
                        <li className="footer-header">Features</li>
                        <li><a href="https://vyaparapp.in/invoice-landing">Invoices</a></li>
                    </ul>
                    <ul className="blogs-list">
                        <li className="footer-header">Blogs</li>
                        <li><a href="https://vyaparapp.in/blog/?p=1892">Here's what you should know about Union Budget
                            2019-20!</a></li>
                        <li><a href="https://vyaparapp.in/blog/?p=1878">Vyapar FREE vs PAID Mobile App: Which one to go
                            for?</a></li>
                    </ul>
                    <div className="copyright">
                        <span><Link to="/permission">Permissions</Link></span>
                        <span><Link to="/terms">Terms and Conditions</Link></span>
                        <span>Simply Vyapar Apps Pvt Ltd<sup>TM</sup></span>
                    </div>
                </div>
            </div>

        );
    }
}

export default Footer;
