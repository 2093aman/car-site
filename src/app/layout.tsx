import type { Metadata } from "next";
import { Montserrat, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ['400', '600', '700'],
  variable: "--font-montserrat",
  display: 'swap',
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ['300', '400', '500'],
  variable: "--font-poppins",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://www.umzeautohaus.com.au'),
  title: {
    default: "Japanese Car Imports Australia | UMZE Autohaus",
    template: "%s | UMZE Autohaus"
  },
  description: "UMZE Autohaus is a trusted Japanese car importer in Australia, helping you buy, source, and import high-quality Japanese cars with ease.",
  keywords: ["Japanese car imports Melbourne", "JDM imports Australia", "import cars from Japan", "Japanese vehicle specialists", "car import service Melbourne", "JDM cars Australia", "Japanese auction cars", "import compliance Melbourne"],
  authors: [{ name: "UMZE Autohaus" }],
  creator: "UMZE Autohaus",
  publisher: "UMZE Autohaus",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://www.umzeautohaus.com.au',
    siteName: 'UMZE Autohaus',
    title: 'Japanese Car Imports Australia | UMZE Autohaus',
    description: 'UMZE Autohaus is a trusted Japanese car importer in Australia, helping you buy, source, and import high-quality Japanese cars with ease.',
    images: [
      {
        url: '/images/PNG.png',
        width: 1200,
        height: 630,
        alt: 'UMZE Autohaus - Japanese Car Import Specialists',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japanese Car Imports Australia | UMZE Autohaus',
    description: 'UMZE Autohaus is a trusted Japanese car importer in Australia, helping you buy, source, and import high-quality Japanese cars with ease.',
    images: ['/images/PNG.png'],
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
    google: 'K-XntYXhbRTkuDKxxTK22Hq90v4ZBr4h4fFT-H9lEaA',
  },
  alternates: {
    canonical: '/',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU">
      <head>
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "UMZE Autohaus",
              "url": "https://www.umzeautohaus.com.au",
              "logo": "https://www.umzeautohaus.com.au/images/PNG.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+61 405 599 076",
                "contactType": "customer service",
                "areaServed": "AU",
                "availableLanguage": "en"
              },
              "sameAs": [
                "https://www.facebook.com/umzeautohaus",
                "https://www.instagram.com/umzeautohaus"
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "UMZE Autohaus",
              "image": "https://www.umzeautohaus.com.au/images/PNG.png",
              "@id": "https://www.umzeautohaus.com.au",
              "url": "https://www.umzeautohaus.com.au",
              "telephone": "+61 405 599 076",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Melbourne",
                "addressLocality": "Melbourne",
                "addressRegion": "VIC",
                "postalCode": "3000",
                "addressCountry": "AU"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -37.8136,
                "longitude": 144.9631
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday"
                ],
                "opens": "09:00",
                "closes": "17:30"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "UMZE Autohaus",
              "url": "https://www.umzeautohaus.com.au",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://www.umzeautohaus.com.au/vehicles-for-import?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
      </head>
      <body
        className={`${montserrat.variable} ${poppins.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
