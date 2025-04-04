import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/layout/navbar";
import Footer from "@/component/layout/footer";
import "./page.module.scss";

const geistSans = Geist({
   variable: "--font-geist-sans",
   subsets: ["latin"],
});

const geistMono = Geist_Mono({
   variable: "--font-geist-mono",
   subsets: ["latin"],
});

export const metadata = {
   title: "Dizzy Tech",
   description: "Your Digital Growth Partner.",
   icons:{
     icon :"/favicon.ico"
   }
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={`${geistSans.variable} ${geistMono.variable}`}>
            <Navbar />
            {children}
            <Footer />
         </body>
      </html>
   );
}
