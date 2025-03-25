import { Poppins } from "next/font/google";
import Header from "@/components/Layout/Header";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export const metadata = {
  title: "Super Lighting BD",
  description: "The best lighting solution provider in bangladesh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Header/>
        <Navbar/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
