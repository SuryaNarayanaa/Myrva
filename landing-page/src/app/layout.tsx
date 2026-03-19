import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Myrva",
  description: "Parametric income protection for delivery partners. Automatic payouts when weather, AQI, or disruptions stop you from working.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
