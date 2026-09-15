import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faFacebook, faInstagram, faLinkedin, faTiktok, faXTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons'
import { faX } from '@fortawesome/free-solid-svg-icons';

function Footer(){
    return(
        <footer className="footer">
            <div>
                <ul className="footer-solutions">
                    <li>Solutions</li> 
                    <li>Cashia Wallet</li>
                    <li>Cashia Stika</li>
                    <li>Casia Checkout</li>
                    <li>Cashia Payment Links</li>
                    <li>Developer APIs</li>
                </ul>
                <ul className="footer-company">
                    <li> Company</li>
                    <li>About</li>
                    <li>Careers We're Hiring</li>
                    <li>Blog</li>
                    <li>Help Centre</li>
                </ul>
                <ul className="footer-resources">
                    <li>Resources</li>
                    <li>API Resources</li>
                    <li>FAQs</li>
                    <li>Pricing & Tariffs</li>
                </ul>
                <ul className="footer-legal">
                    <li>Legal</li>  
                    <li>Cookie policy</li>
                    <li>Privacy policy</li>
                    <li>Refund policy</li>
                    <li>Terms & Conditions (General)</li>
                    <li>Merchant terms & conditions</li>
                    <li>Agent terms & conditions</li>
                    <li>Developer terms & conditions</li>
                </ul>
            </div>
            <div>        
                <ul>
                    <h1 style={{fontSize: '10px'}}>Connect with us</h1>
                    <li><FontAwesomeIcon icon={faTiktok}/></li>
                    <li><FontAwesomeIcon icon={faInstagram}/></li>
                    <li><FontAwesomeIcon icon={faFacebook}/></li>
                    <li><FontAwesomeIcon icon={faXTwitter}/></li>
                    <li><FontAwesomeIcon icon={faLinkedin}/></li>
                    <li><FontAwesomeIcon icon={faYoutube}/></li>
                </ul>
                <ul>
                    <p>Monthly Newsletter</p>
                    <textarea placeholder="Your email"></textarea>
                    <button>Subscribe Now</button>
                    <p>Unsubscribe anytime. By subscribing you agree to our Privacy Policy</p>
                </ul>
            </div>
            <div className="copyright">
                <p> Licensed and Registered by the Central Bank of Kenya</p>
                <p>Cashia {new Date().getFullYear()}. All rights reserved.</p>
            </div>        
        </footer>
    );
}

export default Footer