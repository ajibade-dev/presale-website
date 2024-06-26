"use client"
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import { MoralisProvider } from "react-moralis";

const inter = Inter({ subsets: ["latin"] });

 const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
<MoralisProvider initializeOnMount={false}>
    <html lang="en">
      
      <body className={inter.className}>
        <Navbar />
        {children}
        </body>
        
    </html>
    </MoralisProvider>
  );
}
