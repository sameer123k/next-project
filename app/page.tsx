import React from 'react';
import { Box, Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import heroimage from '@/app/assets/images/hero.png';
import { Metadata } from 'next';
import Image from 'next/image';
import "./style.css";
import cmmi from '@/app/assets/images/CMMI-level3.jpg';
import country from '@/app/assets/images/countries.jpg';
import award from '@/app/assets/images/customer-choice-award.jpg';
import client from '@/app/assets/images/satisfied-clients.jpg';
import experience from '@/app/assets/images/it-experience.jpg';
import Slider from "@/app/home/slider/page";
import Products from "@/app/home/products/page";
import Category from "@/app/home/category/page";

export const metadata: Metadata = {
    title: "Index Page | Next Application",
    description: "Index Description",
    keywords: "Best Next App, Top Next Application",
    robots: {
        index: true,
        follow: true,
        nocache: true,
    }
};
export default function Home() {
    return (
        <>
            <Box className="HeroSection">
                <Container>
                    <Grid container sx={{
                        alignItems: 'center',
                    }}>
                        <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                            <h2> Quality You Can Trust. <b>Prices You’ll Love.</b></h2>
                            <p>Shop trending products curated just for you — enjoy fast shipping and easy, worry-free returns  </p>
                            <Button className='connectNow'><Link href="/contact">Explore More</Link></Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                            <Slider />
                        </Grid>
                    </Grid>
                </Container >
            </Box >

            <Box>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Products />
                        </Grid>
                    </Grid>
                </Container>
            </Box>

            <Box>
                <Container>
                    <Grid container>
                        <Grid item md={12}>
                            <Category />
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
