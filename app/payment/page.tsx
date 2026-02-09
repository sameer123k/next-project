'use client';
import { Box, TextField, Button } from '@mui/material';
import Grid from '@mui/material/GridLegacy';
import Styles from "./style.module.css";
import Container from '@mui/material/Container';
export default function PaymentPage() {
    return (
        <Box className={Styles.Checkout}>
            <h1>Checkout</h1>
            <Container>
                <Grid container spacing={2}>
                    {/* Shipping */}
                    <Grid item xs={12} md={6}>
                        <Box className={Styles.shipping}>
                            <h2>Shipping Details</h2>

                            <TextField fullWidth label="Full Name" margin="normal" />
                            <TextField fullWidth label="Address" margin="normal" />
                            <TextField fullWidth label="City" margin="normal" />
                            <TextField fullWidth label="Postal Code" margin="normal" />
                        </Box>
                    </Grid>

                    {/* Payment */}
                    <Grid item xs={12} md={6}>
                        <Box className={Styles.payment}>
                            <h2>Payment Information</h2>

                            <TextField fullWidth label="Card Number" margin="normal" />
                            <TextField fullWidth label="Card Holder Name" margin="normal" />

                            <Grid container spacing={2}>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="Expiry Date" margin="normal" />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField fullWidth label="CVV" margin="normal" />
                                </Grid>
                            </Grid>

                            <Button
                                fullWidth className={Styles.paynow} href="order-success"
                            >
                                Pay Now
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
