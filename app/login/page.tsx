import React from 'react'

export default function login() {
    return (

        <div className="login-container">

            <div className="login-header">
                <h1>Login</h1>
                <p>Access your account</p>
            </div>

            <form className="login-form">
                <input type="email" placeholder="Email Address" required />
                <input type="password" placeholder="Password" required />
                <button type="submit">Login</button>

                <div className="login-links">
                    <a href="#">Forgot Password?</a> |
                    <a href="#">Create Account</a>
                </div>
            </form>
        </div>
    )
}
