
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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

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
                        <h6> Welcome to SK Creation — Empowering E-Commerce Businesses Through Technology</h6>
                    </Box>
                </Grid>
            </Grid>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item xs={3} sm={3} md={3} lg={3} xl={3}>
                        <Image src={Logo} alt="logo" />
                    </Grid>
                    <Grid item xs={7} sm={7} md={5} lg={5} xl={5}>
                        <div className={styles.searchBox}>
                            <input type="search" placeholder='Search Products ...' />
                            <SearchIcon />
                        </div>
                    </Grid>
                    <Grid item xs={2} sm={2} md={4} lg={4} xl={4}>
                        <ul className={isNavOpen ? styles.navActive : ''}>
                            <li><Link href="/">Home</Link></li>
                            <li><Link href="/about">Store</Link></li>
                            <li><Link href="/services">
                                <Badge badgeContent={3} color="secondary">
                                    <AddShoppingCartIcon />
                                </Badge>
                            </Link></li>
                        </ul>
                        <Button onClick={toggleNav}> <DensityMediumIcon />  </Button>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
