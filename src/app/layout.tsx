import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Just Wright Electrical | Trusted Auckland Electricians",
  description:
    "Just Wright Electrical are trusted Auckland electricians providing residential and commercial electrical services. Call 021 770 844 for a free quote.",
  applicationName: "Just Wright Electrical",
  metadataBase: new URL("https://justwrightelectrical.co.nz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Just Wright Electrical | Trusted Auckland Electricians",
    description:
      "Just Wright Electrical are trusted Auckland electricians providing residential and commercial electrical services. Call 021 770 844 for a free quote.",
    type: "website",
    locale: "en_NZ",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-950 text-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
