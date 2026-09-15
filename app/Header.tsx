import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Header(){
    return(
        <header>
            <nav className="header">
                <h1><img src="./assets/Vector (6).png"/>Cashia</h1>
                <ul>
                    <li>About Us</li>
                    <li>Solutions</li>
                    <li>Help Centre</li>
                    <li>Blog</li>
                    <li>Resources</li>
                    <li>Tariff</li>
                    <li>Contact Us</li>
                </ul>
                <button>Register</button>
            </nav>
        </header>      
    );
}

export default Header