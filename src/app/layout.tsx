import type { Metadata } from "next";
import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { WixClientContextProvider } from "@/context/wixContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


// Import the Inter and Poppins fonts
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["100", "500", "700"] });

export const metadata: Metadata = {
  title: "Ali Raza",
  description: "A complete e-commerce application with Next.js and Wix",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className}`}>
        <WixClientContextProvider>
          <Navbar />
          {children}
          <Footer />
        </WixClientContextProvider>
      </body>
    </html>
  );
}

