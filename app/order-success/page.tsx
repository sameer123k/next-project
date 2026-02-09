"use client";

import React from "react";
import { Container, Box, Divider, Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import styles from "./style.module.css";
import Link from "next/link";

export default function OrderSuccess() {
    return (
        <Container maxWidth="md" className={styles.wrapper}>
            <Box className={styles.card}>
                {/* Success Icon */}
                <Box className={styles.iconWrap}>
                    <CheckCircleIcon className={styles.icon} />
                </Box>

                {/* Heading */}
                <h1 className={styles.title}>Thank You for Your Order!</h1>
                <p className={styles.subtitle}>
                    Your payment was successful and your order has been placed.
                </p>

                <Divider className={styles.Divider} />

                {/* Shipping Details */}
                <Box className={styles.section}>
                    <h2>Shipping Details</h2>
                    <p><strong>Name:</strong> Rahul Sharma</p>
                    <p><strong>Address:</strong> 123, MG Road, Bangalore, India</p>
                    <p><strong>Phone:</strong> +91 98765 43210</p>
                </Box>

                <Divider className={styles.Divider} />

                {/* Payment Info */}
                <Box className={styles.section}>
                    <h2>Payment Information</h2>
                    <p><strong>Payment Method:</strong> Credit Card</p>
                    <p><strong>Transaction ID:</strong> TXN89457324</p>
                    <p><strong>Total Paid:</strong> ₹4,999</p>
                </Box>

                <Divider className={styles.Divider} />

                {/* Actions */}
                <Box className={styles.actions}>
                    <Button variant="outlined" color="secondary">
                        <Link href="track-order">   Track Order</Link>
                    </Button>

                    <Button variant="outlined" color="primary">
                        <Link href="store"> Continue Shopping</Link>
                    </Button>
                </Box>
            </Box>
        </Container>
    );
};

