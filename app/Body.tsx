import Card1 from './Cards/Card1.jsx'
import image from './assets/image.png'
import imageOne from './assets/image (1).png'
import imageTwo from './assets/image (2).png'
import Card2 from './Cards/Card2.jsx'
import Card3 from './Cards/Card3.jsx'
import FaqSection from './faq/FaqSections'
import Slider from './Cards/Slider.jsx'
import vector from '../assets/Vector.svg';
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6';
import Accordion from './faq/Accordion.js'
import { AlignCenter } from 'lucide-react'



function Body() {
    return (
        <main className="body">
        <div className="welcome">
            <Slider/>
        </div>
        
        <div className="solutions">
            <div className="mission">
            <p className="mission-text">Our goal is to make money feel lighter, so more can begin</p>
            <p className="mission-description"> Money shouldn't feel heavy, awkward, or risky. Cashia is a Kenyan-built digital payments platform that removes the friction, fear, and exposure from everyday money moves. We're here for individuals who want to send or receive money without the stress, businesses tired of payment chaos, and developers who need tools that actually work. This is where people and businesses spend less time saying "if only" and more time asking "what's next."</p>
        </div>
            <h1 style={{ fontSize: '35px', textAlign: 'center'}}>When <span className="path-highlight">money </span>feels heavy</h1>
            <div className="card">
                <div className="card-you">
                    <Card1 title={<span style={{fontSize: '20px', fontWeight: 'bold'}}>For You</span>} description="You just want to send or receive money - not expose your number everywhere, chase people awkwardly for what they owe you, or double-check payments late at night. But somehow, money always comes with stress. What if it didn't have to?" buttonText="See how we fix it" />
                </div>
                <div className="card-business"> 
                    <Card1 title={<span style={{fontSize: '20px', fontWeight: 'bold'}}>For Your Business</span>} description="You're selling, but payments feel messy. DMs to pay, screenshots to confirm payments, delayed transaction confirmations, and reconciling long after closing time. It works, but it's exhausting and risky. Your evenings should be yours." buttonText="See how we fix it" />
                </div>
                <div className="card-builders">
                    <Card1 title={<span style={{fontSize: '20px', fontWeight: 'bold'}}>For Builders</span>} description="You want to build, but payments are a headache. You need to integrate money movement into your product, but the APIs are messy, the documentation is unclear, and the support is non-existent. You just want to build, not fight with payments." buttonText="See how we fix it" />
                </div>
            </div>
        </div>
        <div className="path">
            <div className="path-text">
                <h1>Choose your <span className="path-highlight">path</span></h1>
                <p  style={{fontSize:'15px', width: '80%', alignSelf: 'center'}}>However you move money, there’s a path built for you. Cashia adapts to your everyday needs, whether you’re managing personal payments, running a business, or creating something new.</p>
            </div>
            <div className="path-you">
                    <Card2 image={image} text={<span className="path-you-text">Money moves with you</span>} title="For You Life" description="Cashia is built for real life—splitting bills, sending support, paying rent, or getting paid back without awkward follow-ups. With simple tags instead of long account details, moving money feels natural, fast, and stress-free." point1="Send and receive money instantly using simple tags." point2="Track spending without spreadsheets or stress." point3="Pay people the way you already think—fast and familiar." buttonText="Get Started" />
            </div>
            <div className="path-business">
                <Card2 image={imageOne} text={<span className="path-business-text">Run your business, not your payments</span>} title="For Your Business" description="Cashia helps businesses collect, manage, and move money with confidence. Whether you’re selling online, in-person, or through links, payments stay professional, traceable, and easy to reconcile—so you can focus on growth." point1="Accept payments without exposing account or personal details" point2="Get real-time visibility into sales, payouts, and cash flow" point3="Create simple payment links that customers trust and understand" buttonText="Power Your Business" />
            </div>
            <div className="path-builders">
                <Card2 image={imageTwo} text={<span className="path-builder-text">Build on rails you can trust.</span>} title="For Builders" description="Cashia provides the financial infrastructure developers need to create reliable, scalable products. With clear documentation, secure APIs, and systems designed to grow, builders can ship faster without worrying about the basics." point1="Integrate secure money movement through clean, well-documented APIs" point2="Scale confidently with infrastructure designed for high-volume use" point3="Get developer-first support from teams that understand production needs" buttonText="Start Building" />
            </div>
        </div>
        <div className="trust">
            <h1 className="trust-text">Why people <span className="path-highlight">trust</span> Cashia</h1>
            <div className="you">
                <div className="you-text">
                <Card3 title="Everything we build at Cashia, is built to be useful" description="Every feature exists because someone told us money felt heavy somewhere. We listen, we build and we test with real people. If it doesn't make life lighter, it doesn't ship."/>
                </div>
            </div>
            <div className="business">
                <div className="business-text">
                <Card3 title="Cashia is Safe and Secure. Your money and identity are safe here." description="We're licensed by the Central Bank of Kenya and built to meet both local and global compliance standards. Bank-grade security, PCI DSS certified, 3D Secure protected."/>
                </div>
            </div>
            <div className="builders">
                <div className="builders-text">
                <Card3 title="Cashia is Powered by Real People who pick up when you call." description="When something feels off, you get a human who picks up. When you message us on WhatsApp, you speak to Real people. No bots, no runaround, no 'that's not my department.' We speak Swahili and English, and we're here when you need us."/>
                </div>
            </div>
        </div>
       <FaqSection/>
        <section className="help">
        <div className="help-title">
            <p>Regulated by CBK | PCI DSS Certified | 3D Secure Protected</p>
            <h1 style={{ fontSize: '25px'}}>Need Help?</h1>
        </div>

        <ul className="help-contact">
            <li>
            <div className="help-icon"><FaWhatsapp /></div>
            <div className="help-label">WhatsApp:</div>
            <div className="help-value">0709 200 900</div>
            </li>

            <li>
            <div className="help-icon"><FaEnvelope /></div>
            <div className="help-label">Email:</div>
            <div className="help-value">support@cashia.com</div>
            </li>

            <li>
            <div className="help-icon"><FaPhone /></div>
            <div className="help-label">Call</div>
            <div className="help-value">0709 200 900</div>
            </li>
        </ul>
        </section>
        </main>
        
    );
}

export default Body