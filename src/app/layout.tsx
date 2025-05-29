import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";
import Layout from "@/components/Layout";
import { Toaster } from "react-hot-toast";

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
      <body>
        <Layout>
          <Header />
          {children}
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              duration: 3000,
              style: { background: "#000000", color: "#ffffff" },
            }}
          />
        </Layout>
      </body>
    </html>
  );
}
