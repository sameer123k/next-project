import React from 'react';
import "../style.css";
import { Box } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Image from 'next/image';
import registerImg from '@/app/assets/images/register.webp';

export default function page() {
    return (
        <Box className="login-container">
            <Grid container>
                <Grid item sm={12} md={6}>
                    <Box className="loginImage">
                        <Image src={registerImg} alt="login image"></Image>
                    </Box>
                </Grid>
                <Grid item sm={12} md={6}>
                    <Box className="loginForm">

                        <Box className="login-header">
                            <h1>Register</h1>
                            <p>Create your account</p>
                        </Box>

                        <form className="login-form">
                            <input type="text" placeholder="Full Name" required />
                            <input type="email" placeholder="Email Address" required />
                            <input type="tel" placeholder="Phone Number" required />
                            <button type="submit">Register</button>

                            <Box className="login-links">
                                <a href="/login">Already Have an Account ?</a>
                            </Box>
                        </form>
                    </Box>
                </Grid>
            </Grid>
        </Box>
    )
}
