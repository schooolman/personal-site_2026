import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jake Schoolmeesters | Senior Front End Developer",
    template: "%s | Jake Schoolmeesters",
  },
  description:
    "Front-end developer based in Chicago specializing in Adobe Experience Manager. Building beautiful, functional user interfaces.",
  openGraph: {
    title: "Jake Schoolmeesters | Senior Front End Developer",
    description:
      "Front-end developer based in Chicago specializing in Adobe Experience Manager.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
