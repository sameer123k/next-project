import React from 'react';
import Box from '@mui/material/Box';
import styles from '@/app/components/header.module.css';
import Grid from '@mui/material/GridLegacy';
import Container from '@mui/material/Container';

export default function footer() {
    return (
        <Box className={styles.footer}>
            <Container >
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className={styles.footer_left}>

                            <h3>Company<span>logo</span></h3>

                            <p className={styles.footer_links}>
                                <span className="link-1">Home</span>

                                <span>Blog</span>

                                <span>Pricing</span>

                                <span>About</span>

                                <span>Faq</span>

                                <span>Contact</span>
                            </p>
                            <p>Company Name © 2015</p>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className={styles.footer_center}>

                            <div>
                                <i className="fa fa-map-marker"></i>
                                <p><span>444 S. Cedros Ave</span> Solana Beach, California</p>
                            </div>

                            <div>
                                <i className="fa fa-phone"></i>
                                <p>+1.555.555.5555</p>
                            </div>

                            <div>
                                <i className="fa fa-envelope"></i>
                                <p><a href="mailto:support@company.com">support@company.com</a></p>
                            </div>

                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={4} xl={4} xxl={4}>
                        <div className={styles.footer_right}>

                            <p className="footer-company-about">
                                <span>About the company</span>
                                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
                            </p>

                            <div className="footer-icons">

                                <span><i className="fa fa-facebook"></i></span>
                                <span><i className="fa fa-twitter"></i></span>
                                <span><i className="fa fa-linkedin"></i></span>
                                <span><i className="fa fa-github"></i></span>

                            </div>

                        </div>
                    </Grid>
                </Grid>
            </Container>
            <Box className={styles.footercopy}>&copy; 2025 abc.com | All Rights Reserved </Box>
        </Box>
    )
}
