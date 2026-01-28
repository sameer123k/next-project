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
import Slider from "@/app/home/slider/page"

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
                        <Grid item xs={12} sm={12} md={8} lg={8} xl={8} xxl={8}>
                            <h2>Welcome to <b>Sk Creation</b></h2>
                            <h4>Empowering Businesses Through Technology</h4>
                            <p>
                                We help businesses grow, innovate, and succeed by delivering smart, scalable, and reliable technology solutions. From digital transformation to custom development, Sk Creation turns ideas into impactful results.
                            </p>
                            <Button><Link href="/services">Get Started</Link></Button>
                            <Button className='connectNow'><Link href="/contact">Connect Now</Link></Button>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                            <Slider />
                        </Grid>
                    </Grid>
                </Container >
            </Box >

            <Box className="calculationDiv">
                <Container>
                    <Grid container sx={{
                        alignItems: 'center',
                    }}>
                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                            <div className="outer">
                                <Image src={cmmi} alt="CMMI Level 3 Certified" />
                                <div className="contri">
                                    CMMI
                                    <br />
                                    <span>Level 3 Certified</span>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                            <div className="outer">
                                <Image src={country} alt="60+ Countries" />
                                <div className="contri">
                                    5+
                                    <br />
                                    <span>Countries</span>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                            <div className="outer">
                                <Image src={experience} alt="14 year it experience" />
                                <div className="contri">
                                    5 Years
                                    <br />
                                    <span>IT Experience</span>
                                </div>
                            </div>
                        </Grid>

                        <Grid item xs={12} sm={12} md={3} lg={3} xl={3} xxl={3}>
                            <div className="outer">
                                <Image src={client} alt="99.1% Satisfied Clients" />
                                <div className="contri">
                                    96.5%
                                    <br />
                                    <span>Satisfied Clients</span>
                                </div>
                            </div>
                        </Grid>

                    </Grid>
                </Container>
            </Box>
        </>
    );
}
