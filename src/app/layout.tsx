import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Authjs",
  description: "Authentication with Auth.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>{children}</body>
    </html>
  );
}
