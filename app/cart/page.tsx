import React from 'react';
import { Box } from '@mui/material';
import { Container, Grid, Button } from '@mui/material';
import Styles from "./style.module.css";
import Shoes from "@/app/assets/images/products/shoes.png";
import Headphone from "@/app/assets/images/products/headphone.png";
import Image from 'next/image';

export default function page() {
    return (
        <Box sx={{ flexGrow: 1 }} className={Styles.cartPage}>
            <Container>
                <Grid container spacing={3} >
                    <Grid item xs={8} sx={{ flexGrow: 1 }}>

                        <Box className={Styles.product}>
                            <Box className={Styles.ProductInner}>
                                <Box className={Styles.productImg}>
                                    <Image src={Shoes} alt="shoes"></Image>
                                </Box>
                                <Box className={Styles.productDetails}>
                                    <h3>Branded Shoes</h3>
                                    <p> Sneakers For Men (Orange, White , 9) </p>
                                    <h2>&#8377; 899/- </h2>
                                    <Box className={Styles.counter}>
                                        <span> - </span>
                                        <span>1</span>
                                        <span>+</span>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <button>X</button>
                            </Box>
                        </Box>

                        <Box className={Styles.product}>
                            <Box className={Styles.ProductInner}>
                                <Box className={Styles.productImg}>
                                    <Image src={Headphone} alt="shoes"></Image>
                                </Box>
                                <Box className={Styles.productDetails}>
                                    <h3>Realme Headphone</h3>
                                    <p> TechLife Studio H1 with 43dB ANC, Hi-Res Audio </p>
                                    <h2>&#8377; 1449/- </h2>
                                    <Box className={Styles.counter}>
                                        <span> - </span>
                                        <span>1</span>
                                        <span>+</span>
                                    </Box>
                                </Box>
                            </Box>
                            <Box>
                                <button>X</button>
                            </Box>
                        </Box>
                    </Grid>

                    <Grid item xs={4} sx={{ flexGrow: 1 }}>
                        <Box className={Styles.cartPricing}>
                            <h4>Price Details</h4>
                            <Box className={Styles.price}>
                                <h5>Price (
                                    <span>1</span>
                                    item ) </h5>
                                <p>
                                    ₹<span>2348.00</span>
                                </p>
                            </Box>
                            <Box className={Styles.price}>
                                <h5>Discount </h5>
                                <p>
                                    <span>10.00</span>%
                                </p>
                            </Box>
                            <Box className={Styles.price}>
                                <h5>Delivery Charges </h5>
                                <p>
                                    <span>0.00</span>
                                </p>
                            </Box>
                            <Box className={Styles.total}>
                                <h5>Total Amount </h5>
                                <p>
                                    ₹<span>2113.02</span>
                                </p>
                            </Box>
                            <Box>
                                <strong>You will save ₹ <span>234.08</span> 
                                     on this order</strong>
                            </Box>
                            <Box>
                                <p className={Styles.Button}>Place Order</p>
                            </Box>
                        </Box>
                    </Grid>

                </Grid>
            </Container>
        </Box >
    )
}
