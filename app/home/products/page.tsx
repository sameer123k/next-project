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

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: '#fff',
    // ...theme.typography.body2,
    // padding: theme.spacing(1),
    // textAlign: 'center',
    // color: (theme.vars ?? theme).palette.text.secondary,
    // ...theme.applyStyles('dark', {
    //     backgroundColor: '#1A2027',
    // }),
}));

export default function Products() {
    return (
        <Box sx={{ flexGrow: 1, paddingBottom: 5 }}>
            <Grid container spacing={3}>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Shoes} alt="shoes"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Branded Shoes
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Headphone} alt="headphone"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Boat Headphone
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Airpods} alt="Airpods"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Realme Aipods
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Jackets} alt="Jackets"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Men's Leather Jackets
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Shoes} alt="shoes"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Branded Shoes
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Headphone} alt="headphone"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Boat Headphone
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Airpods} alt="Airpods"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Realme Aipods
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={3}>
                    <Card className={Styles.productDiv}>
                        <Image src={Jackets} alt="Jackets"></Image>
                        <CardContent className={Styles.Content}>
                            <h3>
                                Men's Leather Jackets
                            </h3>
                            <p>
                                Lizards are a widespread group of squamate reptiles, with over 6,000
                            </p>
                        </CardContent>
                        <CardActions className={Styles.Btns}>
                            <Button size="small">Add To Cart</Button>
                            <Button size="small">Buy Now</Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Box>
    );
}
