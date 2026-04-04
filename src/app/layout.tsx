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
  title: "Just Wright Electrical | Licensed Auckland Electricians",
  description:
    "Licensed Auckland electricians providing residential and commercial electrical services. Switchboard upgrades, lighting, fault finding, 24/7 emergencies. Call 021 770 844 for a free quote.",
  applicationName: "Just Wright Electrical",
  metadataBase: new URL("https://justwrightelectrical.co.nz"),
  alternates: {
    canonical: "/",
  },
  keywords: [
    "Auckland electrician",
    "electrician Auckland",
    "residential electrician",
    "commercial electrician",
    "emergency electrician Auckland",
    "switchboard upgrade Auckland",
    "lighting installation Auckland",
    "electrical repairs Auckland",
  ],
  openGraph: {
    title: "Just Wright Electrical | Licensed Auckland Electricians",
    description:
      "Licensed Auckland electricians for residential and commercial work. Switchboard upgrades, lighting, repairs, and 24/7 emergency callouts. Free quotes.",
    type: "website",
    locale: "en_NZ",
    siteName: "Just Wright Electrical",
  },
  twitter: {
    card: "summary_large_image",
    title: "Just Wright Electrical | Licensed Auckland Electricians",
    description:
      "Licensed Auckland electricians. Residential, commercial, emergency. Call 021 770 844.",
  },
  robots: {
    index: true,
    follow: true,
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
