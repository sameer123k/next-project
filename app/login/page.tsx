import React from 'react';
import "../style.css";
import Grid from '@mui/material/GridLegacy';
import { Box } from '@mui/material';
import loginImg from '@/app/assets/images/login.webp';
import Image from 'next/image';

export default function login() {
    return (

        <Box className="login-container">
            <Grid container>
                <Grid item sm={12} md={6}>
                    <Box className="loginImage">
                        <Image src={loginImg} alt="login image"></Image>
                    </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Box className="loginForm">
                        <Box className="login-header">
                            <h1>Login</h1>
                            <p>Access your account</p>
                        </Box>

                        <form className="login-form">
                            <input type="email" placeholder="Email Address" required />
                            <input type="password" placeholder="Password" required />
                            <button type="submit">Login</button>

                            <Box className="login-links">
                                <a href="#">Forgot Password?</a> |
                                <a href="/register">Don't have an Account ?</a>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>


        </Box>
    )
}
