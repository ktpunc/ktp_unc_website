import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Roboto } from "next/font/google";
import { Layout } from "@/components";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  display: "swap",
  preload: true,
  adjustFontFallback: true,
});

export const metadata: Metadata = {
  title: "Kappa Theta Pi - Eta Chapter",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        {/* Favicon */}
        <link rel="shortcut icon" href="/image/ktp_logo.ico" type="image/x-icon" />

        {/* Google Site Verification */}
        <meta name="google-site-verification" content="5S8lxafTUi-6Il3I6VDxCD5fvsE5s-4KWg0UOWfOj0w" />

        {/* Graph Meta Tags */}
        <meta property="og:title" content="Kappa Theta Pi - Eta Chapter" />
        <meta property="og:image" content="/image/ktp_logo.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:type" content="website" />
      </head>
      
      <body className={roboto.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}
