import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Damo Dashboard",
  description: "A calm personal life dashboard foundation."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
