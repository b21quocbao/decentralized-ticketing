import type { Metadata } from "next";
import "./globals.css";
import "./custom.css";
import Headbar from "./components/Headbar";
import Script from "next/script";
import { useEffect, useState } from "react";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "Decentralized Event Management System",
  description: "Decentralized Event Management System is a decentralized event management system that uses blockchain technology to ensure transparency, security, and accountability.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/assets/vendor/font-awesome/all.min.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/swiper/swiper-bundle.min.css"
        />
        <link rel="stylesheet" href="/assets/vendor/splide/splide.min.css" />
        <link
          rel="stylesheet"
          href="/assets/vendor/slim-select/slimselect.css"
        />
      </head>
      <body>
        <Headbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
