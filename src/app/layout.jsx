import dns from "node:dns";
dns.setServers(["8.8.8.8", "8.8.4.4"]);

import { Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NewNavBar from "@/components/NewNavBar";
import ToastHandler from "@/components/ToastHandler";

const OutfitFont = Outfit({
  subsets: ["latin"],
});
// english alph(latin), greek, arabic, bengali

export const metadata = {
  title: "Slab",
  description: "Find your premium quality Tiles",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${OutfitFont.className}  h-full antialiased`}>
      <body>
        <NewNavBar />
        {/* <Navbar /> */}
        <main className="">{children} </main>
        <Footer />

        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}
