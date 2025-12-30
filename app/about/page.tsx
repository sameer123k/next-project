import { Metadata } from "next";

export const metadata = {
    title: 'About Us',
    description: 'Welcome to About Us Page',
    keywords: 'Aboput us page',
    robots: 'index , follow',
};

export default function AboutPage() {
    return (
        <section className="about-container">

            <div className="about-header">
                <h1>About Us</h1>
                <p>Who we are, what we do, and why we do it</p>
            </div>

            <div className="about-content">

                <div className="about-box">
                    <h2>Who We Are</h2>
                    <p>
                        We are a passionate team dedicated to delivering high-quality digital solutions.
                        Our goal is to help businesses grow by combining creativity, technology,
                        and strategy into meaningful experiences.
                    </p>
                </div>

                <div className="about-box">
                    <h2>Our Mission</h2>
                    <p>
                        Our mission is to create reliable, scalable, and user-friendly products
                        that solve real-world problems. We focus on innovation, performance,
                        and long-term value for our clients.
                    </p>
                </div>

                <div className="about-box">
                    <h2>Why Choose Us</h2>
                    <p>
                        We believe in transparency, quality, and customer satisfaction.
                        With a detail-oriented approach and a commitment to excellence,
                        we ensure every project meets the highest standards.
                    </p>
                </div>

            </div>

            <div className="about-footer">
                © 2025 Your Company Name. All rights reserved.
            </div>

        </section>
    );
}