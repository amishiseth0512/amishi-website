import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import type React from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "About Amishi",
  description: "About Amishi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head></head>
      <body
        className={`${inter.className} bg-background text-foreground antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
