import "./globals.css";
import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "No Parking Players",
  description:
    "The No Parking Players are Carnegie Mellon University's premier improv comedy troupe. We perform monthly shows at the University Center and host improv workshops and classes for students of all skill levels.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`lg:mb-8 mb-[250px] px-3`}>
        <Navbar />
        {children}
        <Fathom />
      </body>
    </html>
  );
}
