import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header/page";
import Footer from "./components/footer/page";
import whatsappimg from '@/app/assets/images/whatsapp.png';
import { Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body cz-shortcut-listen="true">
        <Header />
        <main>{children}</main>
        <Footer />
        {/* whatsapp icons */}
        <Box className="whatsappImage">
          <Link href="https://wa.me/9876543210"> <Image src={whatsappimg} alt="whatsapp" /></Link>
        </Box>
      </body>
    </html>
  )
}