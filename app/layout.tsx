import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./NavBar";

export const metadata: Metadata = {
  title: "Ecommerce App",
  description: "Ecommerce application for buying and selling products",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
