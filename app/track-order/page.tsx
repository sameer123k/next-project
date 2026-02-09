"use client";

import React from "react";
import styles from "./style.module.css";
import {
    Container,
    Box,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel
} from "@mui/material";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import InventoryIcon from "@mui/icons-material/Inventory";
import DoneAllIcon from "@mui/icons-material/DoneAll";

const steps = [
    "Order Confirmed",
    "Packed",
    "Shipped",
    "Out for Delivery",
    "Delivered"
];

const TrackOrder = () => {
    return (
        <Container maxWidth="md" className={styles.wrapper}>
            <Box className={styles.card}>
                {/* Heading */}
                <h1 className={styles.title}>Track Your Order</h1>
                <p className={styles.subtitle}>
                    Enter your order ID to check the current delivery status
                </p>

                {/* Search */}
                <Box className={styles.searchBox}>
                    <TextField
                        fullWidth
                        placeholder="Enter Order ID (e.g. ORD123456)"
                    />
                    <Button variant="contained">Track Order</Button>
                </Box>

                {/* Order Info */}
                <Box className={styles.orderInfo}>
                    <p><strong>Order ID:</strong> ORD123456</p>
                    <p><strong>Estimated Delivery:</strong> 15 Feb 2026</p>
                    <p><strong>Shipping Address:</strong> Bangalore, India</p>
                </Box>

                {/* Tracking Stepper */}
                <Box className={styles.stepperWrap}>
                    <Stepper activeStep={3} alternativeLabel>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                </Box>

                {/* Status Cards */}
                <Box className={styles.statusGrid}>
                    <Box className={styles.statusCard}>
                        <InventoryIcon className={styles.statusIcon} />
                        <h3>Order Packed</h3>
                        <p>Your items are packed and ready</p>
                    </Box>

                    <Box className={styles.statusCard}>
                        <LocalShippingIcon className={styles.statusIcon} />
                        <h3>Shipped</h3>
                        <p>Package is on the way</p>
                    </Box>

                    <Box className={styles.statusCard}>
                        <DoneAllIcon className={styles.statusIcon} />
                        <h3>Out for Delivery</h3>
                        <p>Courier is delivering today</p>
                    </Box>
                </Box>
            </Box>
        </Container>
    );
};

export default TrackOrder;
