import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next eCommerce",
  description: "Create it practice purpose",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
