import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok, FaXTwitter, FaYoutube } from 'react-icons/fa6';


function Footer(){
    return(
        <footer className="footer">
            <div>
                <ul className="footer-solutions">
                    <li style={{fontWeight: 'bold'}}>Solutions</li> 
                    <li>Cashia Wallet</li>
                    <li>Cashia Stika</li>
                    <li>Casia Checkout</li>
                    <li>Cashia Payment Links</li>
                    <li>Developer APIs</li>
                </ul>
                <ul className="footer-company">
                    <li style={{fontWeight: 'bold'}}> Company</li>
                    <li>About</li>
                    <li>Careers We're Hiring</li>
                    <li>Blog</li>
                    <li>Help Centre</li>
                </ul>
                <ul className="footer-resources">
                    <li style={{fontWeight: 'bold'}}>Resources</li>
                    <li>API Resources</li>
                    <li>FAQs</li>
                    <li>Pricing & Tariffs</li>
                </ul>
                <ul className="footer-legal">
                    <li style={{fontWeight: 'bold'}}>Legal</li>  
                    <li>Cookie policy</li>
                    <li>Privacy policy</li>
                    <li>Refund policy</li>
                    <li>Terms & Conditions (General)</li>
                    <li>Merchant terms & conditions</li>
                    <li>Agent terms & conditions</li>
                    <li>Developer terms & conditions</li>
                </ul>
            </div>
            <div className="bottom">        
                <ul className="left">
                    <h1 style={{fontSize: '20px'}}>Connect with us</h1>
                    <li><FaTiktok /></li>
                    <li><FaInstagram /></li>
                    <li><FaFacebook /></li>
                    <li><FaXTwitter /></li>
                    <li><FaLinkedin /></li>
                    <li><FaYoutube /></li>
                </ul>
                <ul className="right"> 
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