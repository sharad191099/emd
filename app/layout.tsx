import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Raleway } from "next/font/google";
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["400", "500", "600", "700", "800"],
});
export const metadata: Metadata = {
  title: "EMD - Event Management",
  description: "Professional event management services.",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="en"
    suppressHydrationWarning
      className={`${raleway.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}