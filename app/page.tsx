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
                        <h2>Hero Section Heading</h2>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quis deleniti praesentium assumenda voluptate mollitia ut nihil voluptas magnam perspiciatis, quos vitae sit deserunt omnis doloribus asperiores incidunt ipsa laborum.
                        </p>
                        <Button><Link href="/about">ReadMore</Link></Button>
                    </Grid>
                    <Grid item xs={12} sm={12} md={4} lg={4} xl={4} xxl={4}>
                        <Image src={heroimage} alt="hero image" />
                    </Grid>
                </Grid>
            </Container >
        </Box >
    </>
  );
}
