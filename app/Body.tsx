import Card1 from './Cards/Card1.jsx'
import image from './assets/image.png'
import imageOne from './assets/image (1).png'
import imageTwo from './assets/image (2).png'
import Card2 from './Cards/Card2.jsx'
import Card3 from './Cards/Card3.jsx'
import Card4 from './Cards/Card4.jsx'
import Slider from './Cards/Slider.jsx'
import { FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa6';



function Body() {
    return (
        <main className="body">
        <div className="welcome">
            <Slider/>
        </div>
        <div className="mission">
            <p className="mission-text">Our goal is to make money feel lighter, so more can begin</p>
            <p className="mission-description"> Money shouldn't feel heavy, awkward, or risky. Cashia is a Kenyan-built digital payments platform that removes the friction, fear, and exposure from everyday money moves. We're here for individuals who want to send or receive money without the stress, businesses tired of payment chaos, and developers who need tools that actually work. This is where people and businesses spend less time saying "if only" and more time asking "what's next."</p>
        </div>
        <div className="solutions">
            <h1 style={{ fontSize: '25px', textAlign: 'center'}}>When <span className="path-highlight">money </span>feels heavy</h1>
            <div className="card">
                <div className="card-you">
                    <Card1 title="For You" description="You just want to send or receive money - not expose your number everywhere, chase people awkwardly for what they owe you, or double-check payments late at night. But somehow, money always comes with stress. What if it didn't have to?" buttonText="See how we fix it" />
                </div>
                <div className="card-business"> 
                    <Card1 title="For Your Business" description="You're selling, but payments feel messy. DMs to pay, screenshots to confirm payments, delayed transaction confirmations, and reconciling long after closing time. It works, but it's exhausting and risky. Your evenings should be yours." buttonText="See how we fix it" />
                </div>
                <div className="card-builders">
                    <Card1 title="For Builders" description="You want to build, but payments are a headache. You need to integrate money movement into your product, but the APIs are messy, the documentation is unclear, and the support is non-existent. You just want to build, not fight with payments." buttonText="See how we fix it" />
                </div>
            </div>
        </div>
        <div className="path">
            <div className="path-text">
                <h1>Choose your <span className="path-highlight">path</span></h1>
                <p  style={{fontSize:'10px', width: '80%'}}>However you move money, there’s a path built for you. Cashia adapts to your everyday needs, whether you’re managing personal payments, running a business, or creating something new.</p>
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
            <h1 className="trust-text">Why people <span className="trust-highlight">trust</span> Cashia</h1>
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
        <div className="FAQs">
            <div className="FAQs-text">
                <h1 style={{ fontSize: 25}}>FAQs</h1>
                <p>Everything you need to know about Cashia, Products, Features, Pricing, accounts and trouble shooting</p>
            </div>
            <div className="info">
                <div className="FAQs-button">
                    <button><a href="">Getting Started</a></button>
                    <button><a href="">Membership and Pricing</a></button>
                    <button><a href="">Payment requests and cashing out</a></button>
                    <button><a href="">User accounts & technical issues</a></button>
                    <button><a href="">Refunds & disputes</a></button>
                </div> 
                <div className="questions">
                    <Card4/>
                    <div className="still">
                    <Card1 title="Still have questions?" description="You can read more on our Frequently asked questions page" buttonText="See all FAQs" />
                    </div>
                </div>    
            </div>    
        </div>
        <div className="help">
            <p>Regulated by CBK | PCI DSS Certified | 3D Secure Protected</p>
            <h1>Need Help?</h1>
            <div className="help-contact">
                <li>
                    <p><FaWhatsapp /></p>
                    <h1>Wahtsapp:</h1>
                    <p>0709200900</p>
                </li>
                <li>
                    <p><FaEnvelope /></p>
                    <h1>Email:</h1>
                    <p>support@Cashia.com</p>
                </li>
                <li>
                    <p><FaPhone /></p>
                    <h1>Call:</h1>
                    <p>0709200900</p>
                </li>
            </div>
        </div>
        </main>
        
    );
}

export default Body