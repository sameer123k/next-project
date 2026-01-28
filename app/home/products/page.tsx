"use client";

import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
    CardActions,
    Button,
    Box,
} from "@mui/material";

const products = [
    {
        id: 1,
        title: "Wireless Headphones",
        price: "₹2,999",
        image: "https://picsum.photos/400/300?1",
    },
    {
        id: 2,
        title: "Smart Watch",
        price: "₹4,499",
        image: "https://picsum.photos/400/300?2",
    },
    {
        id: 3,
        title: "Bluetooth Speaker",
        price: "₹1,999",
        image: "https://picsum.photos/400/300?3",
    },
    {
        id: 4,
        title: "Gaming Mouse",
        price: "₹1,299",
        image: "https://picsum.photos/400/300?4",
    },
];

export default function Products() {
    return (
        <Box sx={{ padding: { xs: 2, md: 4 } }}>
            <Typography
                variant="h4"
                fontWeight="bold"
                textAlign="center"
                mb={4}
            >
                Our Products
            </Typography>

            <Grid container spacing={3}>
                {products.map((product) => (
                    <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
                        <Card
                            sx={{
                                height: "100%",
                                borderRadius: 3,
                                transition: "all 0.3s ease",
                                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                                "&:hover": {
                                    transform: "translateY(-6px)",
                                    boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                                },
                            }}
                        >
                            <CardMedia
                                component="img"
                                height="180"
                                image={product.image}
                                alt={product.title}
                            />

                            <CardContent>
                                <Typography variant="h6" fontWeight={600}>
                                    {product.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="primary"
                                    fontWeight={700}
                                    mt={1}
                                >
                                    {product.price}
                                </Typography>
                            </CardContent>

                            <CardActions sx={{ px: 2, pb: 2 }}>
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{
                                        borderRadius: 2,
                                        textTransform: "none",
                                        fontWeight: 600,
                                    }}
                                >
                                    Add to Cart
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Box>
    );
}
