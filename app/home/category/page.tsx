import React from 'react';
import Styles from "../style.module.css";
import { Box } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Image from 'next/image';
import jeans from '@/app/assets/images/products/jeans.png';
import shirts from '@/app/assets/images/products/shirts.png';
import sandals from '@/app/assets/images/products/sandals.png';
import watch from '@/app/assets/images/products/watches.png';
import sunglass from '@/app/assets/images/products/sunglasses.png';
import airpods from '@/app/assets/images/products/airpods2.png';
import formal from '@/app/assets/images/products/formal.png';
import iphone from '@/app/assets/images/products/iphone.webp';
import beauty from '@/app/assets/images/products/beauty.png';
import led from '@/app/assets/images/products/led.png';
import helmet from '@/app/assets/images/products/helmet.png';
import cable from '@/app/assets/images/products/cable.png';
import cover from '@/app/assets/images/products/cover.png';

export default function page() {
    return (
        <Box sx={{ flexGrow: 1, paddingBottom: 5 }} className={Styles.Category}>
            <Grid container spacing={2}>
                <Grid item sm={12}>
                    <h3> Product Categories</h3>
                </Grid>
                <Grid item md={12}>
                    <Box className={Styles.categoryImg}>
                        <Image src={jeans} alt="Jackets"></Image>
                        <Image src={sandals} alt="jeans"></Image>
                        <Image src={sunglass} alt="sunglass"></Image>
                        <Image src={shirts} alt="shirts"></Image>
                        <Image src={watch} alt="watch"></Image>
                        <Image src={airpods} alt="airpods"></Image>
                        <Image src={formal} alt="formal"></Image>
                        <Image src={iphone} alt="iphone"></Image>
                        <Image src={beauty} alt="iphone"></Image>
                        <Image src={led} alt="iphone"></Image>
                        <Image src={helmet} alt="iphone"></Image>
                        <Image src={cable} alt="iphone"></Image>
                        <Image src={cover} alt="iphone"></Image>
                    </Box>
                </Grid >
            </Grid >
        </Box >
    )
}
