import Link from 'next/link';
import React from 'react';
import '@/app/components/style.css';

export default function header() {
    return (
        <header className="main-header">
            <div className="logo">MyBrand</div>

            <nav className="nav-menu">
                <ul>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li className='dropdown'>
                        <Link href="/services">Services</Link>
                        <ul>
                            <li>Mobile App Development</li>
                            <li>Website Development</li>
                            <li>Digital Marketing Solution</li>
                            <li>Hosting Service</li>
                            <li>Graphic Design Service</li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

            </nav>

            <Link href="/login" className="header-btn">Sign In</Link>
        </header>

    )
}
