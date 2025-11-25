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
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  title: {
    default: "Zoe Holidays - Instagram Gallery | Travel & Adventure Photos",
    template: "%s | Zoe Holidays Instagram"
  },
  description: "Explore stunning travel photography and adventure moments from Zoe Holidays. Browse our curated Instagram gallery featuring breathtaking destinations, travel inspiration, and unforgettable experiences.",
  keywords: [
    "Zoe Holidays",
    "travel photography",
    "Instagram gallery",
    "adventure photos",
    "travel inspiration",
    "destination photos",
    "holiday pictures",
    "travel blog",
    "wanderlust",
    "travel experiences"
  ],
  authors: [{ name: "Zoe Holidays" }],
  creator: "Zoe Holidays",
  publisher: "Zoe Holidays",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    title: "Zoe Holidays - Instagram Gallery | Travel & Adventure Photos",
    description: "Explore stunning travel photography and adventure moments from Zoe Holidays. Browse our curated Instagram gallery featuring breathtaking destinations.",
    siteName: "Zoe Holidays Instagram Gallery",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Zoe Holidays - Travel Photography Gallery",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Zoe Holidays - Instagram Gallery | Travel & Adventure Photos",
    description: "Explore stunning travel photography and adventure moments from Zoe Holidays.",
    images: ["/og-image.jpg"],
    creator: "@zoeholidays",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // bing: "your-bing-verification-code",
  },
};

import JsonLd from "@/components/JsonLd";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Zoe Holidays Instagram Gallery",
    description: "Explore stunning travel photography and adventure moments from Zoe Holidays",
    url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
    publisher: {
      "@type": "Organization",
      name: "Zoe Holidays",
      logo: {
        "@type": "ImageObject",
        url: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/logo.png`,
      },
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <head>
        <JsonLd data={structuredData} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
