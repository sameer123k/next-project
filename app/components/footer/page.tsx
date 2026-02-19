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
import Link from 'next/link';

export default function footer() {
    return (
        <Box className={styles.footer}>
            <Container>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                        <div className={styles.widget1}>
                            <a href="index.html">
                                <Image src={Logo} alt="footer logo" />
                            </a>
                            <p>
                                SK Creation is an e-commerce platform and fashion brand offering a curated online shopping experience with a focus on Indian ethnic wear and traditional outfits.
                            </p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <div className={styles.widget2}>
                            <h3>About </h3>
                            <ul>
                                <li><Link href="index.html">Home</Link></li>
                                <li><Link href="/home/products">Latest Products</Link></li>
                                <li><Link href="#">Careers</Link></li>
                                <li><Link href="contact.html">Contact us</Link></li>
                                <li><Link href="privacy.html">Privacy policy </Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={2} lg={2} xl={2}>
                        <div className={styles.widget2}>
                            <h3>Help</h3>
                            <ul>
                                <li><Link href="#">Payments</Link></li>
                                <li><Link href="#">Shipping</Link></li>
                                <li><Link href="#">Cancellation & Returns</Link></li>
                                <li><Link href="#">FAQ</Link></li>
                            </ul>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4} xl={4} >
                        <div className={styles.widget3}>
                            <h3>Get in Touch</h3>

                            <ul >
                                <li>
                                    <AddLocationAltIcon />
                                    <p>  Jhotwara , Jaipur, Rajasthan, India, 302006</p>
                                </li>
                                <li>
                                    <CallIcon />
                                    <p> +91 94164-01768</p>
                                </li>
                                <li>
                                    <EmailIcon />
                                    <p>  hello121@gmail.com</p>
                                </li>
                            </ul>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                        <div className={styles.copyright}>
                            <p>© 2026 Sk Creation | All Rights Reserved </p>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
