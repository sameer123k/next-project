"use client";

import React from "react";
import Styles from "../style.module.css";
import { Box } from "@mui/material";
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/GridLegacy';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Image from "next/image";

// products 
import Shoes from "@/app/assets/images/products/shoes.png";
import Airpods from "@/app/assets/images/products/airpods.png";
import Headphone from "@/app/assets/images/products/headphone.png";
import Jackets from "@/app/assets/images/products/jackets.png";
import Sunglasses from "@/app/assets/images/products/sunglasses.png";
import helmet from "@/app/assets/images/products/helmet.png";
import watches from "@/app/assets/images/products/watches.png";
import shirts from "@/app/assets/images/products/shirts.png";

const Item = styled(Paper)(({ theme }) => ({

}));

export default function Products() {

    const products = [
        {
            image: Shoes,
            price: "699",
            title: ' Branded Shoes',
            description: 'Sneakers For Men (Orange, White , 9)',
        },
        {
            image: Airpods,
            price: "849",
            title: 'Boat Headphone',
            description: 'Airdopes 161/163,ASAP Charge,40 H Battery',
        },
        {
            image: Headphone,
            price: "1449",
            title: ' Realme Headphone',
            description: 'TechLife Studio H1 with 43dB ANC, Hi-Res Audio',
        },
        {
            image: Jackets,
            price: "2299",
            title: 'Mens Leather Jackets',
            description: 'Men Solid Biker/Riding Jacket',
        },
        {
            image: Sunglasses,
            price: "399",
            title: 'Mens Sunglasses',
            description: 'Riding Glasses, Toughened Glass Lens',
        },
        {
            image: helmet,
            price: "1799",
            title: 'Steelbird Helmet',
            description: 'SBH-23 Hunter ISI Certified Open Face Helmet',
        },
        {
            image: watches,
            price: "799",
            title: 'Analogue Watch',
            description: 'Minimalist Slim Series | Smart Watch Strap',
        },
        {
            image: shirts,
            price: "449",
            title: 'Mens Shirts',
            description: 'Men Slim Fit Checkered Spread Collar Casual Shirt (Pack of 2)',
        },
    ]

    return (

        <Box sx={{ flexGrow: 1, paddingBottom: 5 }} className={Styles.Products}>
            <Grid container spacing={4}>
                <Grid item md={12}>
                    <h3> Our Latest Products </h3>
                </Grid>
                {products.map((res, index) => {
                    return (
                        <Grid item xs={3} key={index}>
                            <Card className={Styles.productDiv}>
                                <Image src={res.image} alt="shoes" width={200} height={100}></Image>
                                <CardContent className={Styles.Content}>
                                    <h5>
                                        &#8377;  {res.price} /-
                                    </h5>
                                    <h3>
                                        {res.title}
                                    </h3>
                                    <p>
                                        {res.description}
                                    </p>
                                </CardContent>
                                <CardActions className={Styles.Btns}>
                                    <Button size="small">Add To Cart</Button>
                                    <Button size="small">Buy Now</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}

            </Grid>
        </Box>
    );
}
