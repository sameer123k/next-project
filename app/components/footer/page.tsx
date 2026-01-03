import React from 'react';
import Box from '@mui/material/Box';
import styles from '@/app/components/header.module.css';
import Grid from '@mui/material/GridLegacy';
import Container from '@mui/material/Container';
import Image from 'next/image';
import Logo from "@/app/assets/images/logo.jpg";
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';

export default function footer() {
    return (
        <Box className={styles.footer}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <div className={styles.widget1}>
                            <a href="index.html">
                                <Image src={Logo} alt="footer logo" />
                            </a>
                            <p>
                                Sk Services offers a comprehensive range of convenient solutions to meet your everyday needs. Specializing in mobile and DTH recharges, Skensures seamless connectivity and entertainment.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={styles.widget2}>
                            <h3>Useful Link</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                                <li><a href="privacy.html">Privacy policy </a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={2}>
                        <div className={styles.widget2}>
                            <h3>Useful Link</h3>
                            <ul>
                                <li><a href="index.html">Home</a></li>
                                <li><a href="about.html">About us</a></li>
                                <li><a href="services.html">Services</a></li>
                                <li><a href="contact.html">Contact us</a></li>
                                <li><a href="privacy.html">Privacy policy </a></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={4}>
                        <div className={styles.widget3}>
                            <h3>Get in Touch</h3>

                            <ul >
                                <li>
                                    <AddLocationAltIcon />
                                    <p>  Jhotwara , Jaipur, Rajasthan, India, 302006</p>
                                </li>
                                <li>
                                    <CallIcon />
                                    <p> +91 9876543210</p>
                                </li>
                                <li>
                                    <EmailIcon />
                                    <p>  hello121@gmail.com</p>
                                </li>
                            </ul>

                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div className={styles.copyright}>
                            <p>© 2026 Sk Creation , Powered by <a href="#">Businesses Through Technology</a> </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
