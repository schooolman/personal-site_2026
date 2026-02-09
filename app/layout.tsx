import type { Metadata } from "next";
import { Space_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ['400', '700'],
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jake.school"),
  title: {
    default: "Jake Schoolmeesters | Senior AEM Software Engineer",
    template: "%s | Jake Schoolmeesters",
  },
  description:
    "Front-end developer based in Chicago specializing in Adobe Experience Manager. Building beautiful, functional user interfaces.",
  openGraph: {
    title: "Jake Schoolmeesters | Senior AEM Software Engineer",
    description:
      "Front-end developer based in Chicago specializing in Adobe Experience Manager.",
    type: "website",
    locale: "en_US",
    url: "https://jake.school",
    siteName: "Jake Schoolmeesters",
  },
  icons: {
    icon: "/favicon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jake Schoolmeesters | Senior AEM Software Engineer",
    description:
      "Front-end developer based in Chicago specializing in Adobe Experience Manager.",
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
        className={`${spaceMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
