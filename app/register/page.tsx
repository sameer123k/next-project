import React from 'react';
import "../style.css";

export default function page() {
    return (

        <div className="login-container">

            <div className="login-header">
                <h1>Register</h1>
                <p>Create your account</p>
            </div>

            <form className="login-form">
                <input type="text" placeholder="Full Name" required />
                <input type="email" placeholder="Email Address" required />
                <input type="tel" placeholder="Phone Number" required />
                <button type="submit">Register</button>

                <div className="login-links">
                    <a href="/login">Already Have an Account ?</a>
                </div>
            </form>
        </div>
    )
}
