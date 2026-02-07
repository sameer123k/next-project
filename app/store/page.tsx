import React from 'react';
import { Box } from '@mui/material';
import { Container } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Products from "@/app/home/products/page";
import Category from "@/app/home/category/page";
export default function page() {
    return (
        <Box>
            <Container>
                <Grid container spacing={2}>
                    <Grid item md={12}>
                        <Products />
                    </Grid>
                    <Grid item md={12}>
                        <Category />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}
