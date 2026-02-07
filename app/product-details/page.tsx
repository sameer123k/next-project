import React from "react";
import { Box, Container, Button } from "@mui/material";
import Grid from '@mui/material/GridLegacy';
import Image from "next/image";
import Shoes from "@/app/assets/images/products/shoes.png";
import Styles from "./style.module.css";
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import Products from "@/app/home/products/page";
export default function page() {

    return (
        <>
            <Box className={Styles.productDetails}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={6}>
                            <Box className={Styles.productImg}>
                                <Grid container>
                                    <Grid item md={4}>
                                        <Box className={Styles.subimages}>
                                            <Image src={Shoes} alt="shoes" />
                                            <Image src={Shoes} alt="shoes" />
                                            <Image src={Shoes} alt="shoes" />
                                            <Image src={Shoes} alt="shoes" />
                                            <Image src={Shoes} alt="shoes" />
                                            <Image src={Shoes} alt="shoes" />
                                        </Box>
                                    </Grid>
                                    <Grid item md={8}>
                                        <Box className={Styles.MainImg}>
                                            <Image src={Shoes} alt="product image"></Image>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <Box className={Styles.productContent}>
                                <h3>Birde Combo Pack of 2 Casual Shoes Sneakers For Men</h3>
                                <p> 740 EVA Men's Sport Shoes Running Shoes For Men (White , 8)</p>
                                <h2>&#8377; 849/- <del>1499/-</del><small>9% Discount</small></h2>
                                <blockquote className={Styles.size}>
                                    <h6>Select Size <span>Size Chart</span></h6>
                                    <select>
                                        <option>6</option>
                                        <option>7</option>
                                        <option>8</option>
                                        <option>9</option>
                                        <option>10</option>
                                    </select>
                                </blockquote>
                                <blockquote className={Styles.deliverydetails}>
                                    <Box className={Styles.Btns}>
                                        <Button>Add to Cart</Button>
                                        <Button>Buy Now</Button>
                                    </Box>
                                    <h6>Delivery Details </h6>
                                    <Box className={Styles.delivery}>
                                        <AirportShuttleIcon /> <h5>Delivery By 10 Feb, Tue</h5>
                                    </Box>
                                    <h6>Select Delivery Location </h6>
                                    <Box className={Styles.delivery}>
                                        <h5>302012 </h5><a href="#">Select Delivery Location</a>
                                    </Box>
                                </blockquote>
                            </Box>
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
        </>
    );
};

