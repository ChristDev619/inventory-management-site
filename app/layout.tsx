import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "InventoryPro - Professional Inventory Management Solutions",
  description: "Transform your inventory management with our comprehensive solutions for small and mid-size manufacturers and retailers. Real-time tracking, process digitalization, and cost optimization.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
