import Link from 'next/link';
import React from 'react'

export default function header() {
    return (
        <header className="main-header">
            <div className="logo">MyBrand</div>

            <nav className="nav-menu">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </nav>

            <Link href="/login" className="header-btn">Sign In</Link>
        </header>

    )
}
