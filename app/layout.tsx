import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amazona V2",
  description: "Modern E-Commerce website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header/>
        {children}
        <footer className="footer footer-center p-4 bg-base-300 text-base-content">
            <p>Copyright &copy; 2014 - All right reserved by Amazona V2</p>
        </footer>
        </body>
    </html>
  );
}
