'use client';

import { useState } from 'react';
import Image from 'next/image';
import logo from './assets/Vector (6).png';

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="site-header">
            <nav className="header" aria-label="Main navigation">
                <div className="brand" aria-label="Cashia home">
                    <div className="brand-mark">
                        <Image src={logo} alt="Cashia logo" width={18} height={18} />
                    </div>
                    <span className="brand-name">Cashia</span>
                </div>

                <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
                    <li>About Us</li>
                    <li>Solutions</li>
                    <li>Help Centre</li>
                    <li>Blog</li>
                    <li>Resources</li>
                    <li>Pricing</li>
                    <li>Contact Us</li>
                </ul>

                <div className="nav-actions">
                    <button className="mode-toggle" aria-label="Toggle color mode">
                        <span className="toggle-knob" />
                    </button>
                    <button className="register-btn">Register</button>
                    <button
                        className="menu-btn"
                        aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={isMenuOpen}
                        onClick={() => setIsMenuOpen((open) => !open)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
        </header>
    );
}

export default Header