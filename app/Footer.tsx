import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';

function Footer() {
    return (
        <footer className="site-footer">
            <div className="footer-inner">
                <div className="footer-grid">
                    <div className="footer-column">
                        <h1>Solutions</h1>
                        <ul>
                            <li>Cashia Wallet</li>
                            <li>Cashia Stika</li>
                            <li>Cashia Checkout</li>
                            <li>Cashia Payment Links</li>
                            <li>Developer APIs</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h1>Company</h1>
                        <ul>
                            <li>About</li>
                            <li className="career-link">
                                <span>Careers</span>
                                <span className="career-arrow" aria-hidden="true">↗</span>
                                <span className="tag">We&apos;re Hiring!</span>
                            </li>
                            <li>Blog</li>
                            <li>Help center</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h1>Resources</h1>
                        <ul>
                            <li>API documentation</li>
                            <li>FAQs</li>
                            <li>Pricing &amp; Tariffs</li>
                        </ul>
                    </div>

                    <div className="footer-column">
                        <h1>Legal</h1>
                        <ul>
                            <li>Cookie policy</li>
                            <li>Privacy policy</li>
                            <li>Refund policy</li>
                            <li>Terms &amp; conditions (General)</li>
                            <li>Merchant terms &amp; conditions</li>
                            <li>Agent terms &amp; conditions</li>
                            <li>Developer terms &amp; conditions</li>
                        </ul>
                    </div>
                </div>

                <div className="footer-lower">
                    <div className="social-panel">
                        <h1>Connect with us</h1>
                        <div className="social-icons">
                            <button className="social-tiktok" aria-label="TikTok"><FaTiktok /></button>
                            <button className="social-instagram" aria-label="Instagram"><FaInstagram /></button>
                            <button className="social-facebook" aria-label="Facebook"><FaFacebook /></button>
                            <button className="social-x" aria-label="X"><FaXTwitter /></button>
                            <button className="social-linkedin" aria-label="LinkedIn"><FaLinkedin /></button>
                            <button className="social-youtube" aria-label="YouTube"><FaYoutube /></button>
                        </div>
                    </div>

                    <div className="newsletter-panel">
                        <h1>Monthly Newsletter</h1>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Your email" aria-label="Your email" />
                            <button type="button">Subscribe Now</button>
                        </div>
                        <p>Unsubscribe anytime. By subscribing you agree to our <a href="#">Privacy Policy</a></p>
                    </div>
                </div>

                <div className="footer-meta">
                    <span>Licensed and Registered by the Central Bank of Kenya</span>
                    <span>Cashia 2026. All rights reserved.</span>
                </div>
            </div>
        </footer>
    );
}

export default Footer