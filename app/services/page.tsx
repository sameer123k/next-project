import React from 'react'

export default function services() {
  return (
   <section className="services-container">

        <div className="services-header">
            <h1>Our Services</h1>
            <p>Solutions designed to help your business grow</p>
        </div>

        <div className="services-grid">

            <div className="service-card">
                <h2>Web Development</h2>
                <p>
                    We build fast, secure, and responsive websites tailored to your business needs
                    using modern technologies and best practices.
                </p>
            </div>

            <div className="service-card">
                <h2>UI / UX Design</h2>
                <p>
                    Our design approach focuses on usability and aesthetics,
                    creating intuitive interfaces that enhance user experience.
                </p>
            </div>

            <div className="service-card">
                <h2>Mobile App Development</h2>
                <p>
                    We develop high-performance mobile applications that deliver
                    seamless experiences across Android and iOS platforms.
                </p>
            </div>

            <div className="service-card">
                <h2>SEO Optimization</h2>
                <p>
                    Improve your online visibility with our SEO strategies,
                    helping your website rank higher and attract more traffic.
                </p>
            </div>

            <div className="service-card">
                <h2>Digital Marketing</h2>
                <p>
                    We help grow your brand through targeted digital marketing campaigns,
                    including social media, content, and paid advertising.
                </p>
            </div>

            <div className="service-card">
                <h2>Maintenance & Support</h2>
                <p>
                    Our ongoing support and maintenance services ensure your systems
                    remain secure, updated, and running smoothly.
                </p>
            </div>

        </div>

        <div className="services-footer">
            © 2025 Your Company Name. All rights reserved.
        </div>

    </section>
  )
}
