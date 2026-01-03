
"use client"; // convert to csr 

import React, { useState } from 'react';

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import Container from '@mui/material/Container';
import Logo from '@/app/assets/images/logo.jpg';
import Link from 'next/link';
import styles from '@/app/components/header.module.css';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import { Button } from '@mui/material';
import Image from 'next/image';

export default function Header() {

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    }

    return (
        <Box className={styles.header}>
            <Grid container>
                <Grid item xs={12}>
                    <Box className={styles.headerTop}>
                        <h6> Welcome to Sk Creation — Empowering  <span> ( Businesses Through Technology )</span></h6>
                    </Box>
                </Grid>
            </Grid>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={4}>
                        <Image src={Logo} alt="logo" />
                    </Grid>
                    <Grid item xs={8}>
                        <ul className={isNavOpen ? styles.navActive : ''}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">About Us</Link></li>
                            <li><Link href="/services">Services</Link></li>
                            <li><Link href="/contact">Contact Us</Link></li>
                            <li className={styles.registerBtn}><Link href="/login">Login / Register</Link></li>
                            <li className={styles.quote}><Link href="/">Request A Quote</Link></li>
                        </ul>
                        <Button onClick={toggleNav}> <DensityMediumIcon />  </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
