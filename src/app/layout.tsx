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
  metadataBase: new URL(process.env.NEXT_PUBLIC_BASE_URL || 'https://umzeautohaus.com'),
  title: {
    default: "UMZE Autohaus - Premium Japanese Car Imports Melbourne | JDM Specialists",
    template: "%s | UMZE Autohaus"
  },
  description: "Melbourne's trusted JDM import specialists. Import premium Japanese vehicles from Japan with full compliance, transparent pricing & expert support. 100+ successful imports.",
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
    url: process.env.NEXT_PUBLIC_BASE_URL || 'https://umzeautohaus.com',
    siteName: 'UMZE Autohaus',
    title: 'UMZE Autohaus - Premium Japanese Car Imports Melbourne',
    description: 'Melbourne\'s trusted JDM import specialists. Import premium Japanese vehicles with full compliance & transparent pricing.',
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
    title: 'UMZE Autohaus - Premium Japanese Car Imports Melbourne',
    description: 'Melbourne\'s trusted JDM import specialists',
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
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_BASE_URL || 'https://umzeautohaus.com',
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
        <link rel="canonical" href={process.env.NEXT_PUBLIC_BASE_URL || 'https://umzeautohaus.com'} />
        <meta name="geo.region" content="AU-VIC" />
        <meta name="geo.placename" content="Melbourne" />
        <meta name="geo.position" content="-37.8136;144.9631" />
        <meta name="ICBM" content="-37.8136, 144.9631" />
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
