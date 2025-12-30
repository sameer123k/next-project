import React from 'react'

export default function contact() {
    return (

        <section className="contact-container">

            <div className="contact-header">
                <h1>Contact Us</h1>
                <p>We’d love to hear from you</p>
            </div>

            <div className="contact-content">

                <div className="contact-info">
                    <h2>Get in Touch</h2>
                    <p><span>Address:</span> 123 Business Street, City, Country</p>
                    <p><span>Email:</span> info@yourcompany.com</p>
                    <p><span>Phone:</span> +1 234 567 8900</p>
                    <p>
                        Feel free to contact us for inquiries, project discussions,
                        or any questions you may have.
                    </p>
                </div>

                <div className="contact-form">
                    <h2>Send a Message</h2>
                    <form>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="text" placeholder="Subject" />
                        <textarea placeholder="Your Message" required></textarea>
                        <button type="submit">Send Message</button>
                    </form>
                </div>
            </div>

        </section>

    )
}