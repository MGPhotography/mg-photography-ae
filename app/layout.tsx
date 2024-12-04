import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "./fonts.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next"

const generalsans = localFont({
  src: "./fonts/GeneralSans-Variable.ttf",
  variable: "--GeneralSans-Variable",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://mgphotographyae.com'),
  title: {
    default: "MG Photography | Best Wedding & Baby Photoshoot in Dubai, UAE",
    template: "%s | MG Photography"
  },
  description: "Premier photography studio specializing in wedding, baby, and portrait photography in Dubai, Abu Dhabi, and across UAE. Capturing your most precious moments.",
  keywords: [
    "MG Photography",
    "wedding photography Dubai",
    "baby photoshoot UAE",
    "professional photography studio",
    "portrait photography Dubai"
  ],
  openGraph: {
    title: "MG Photography - Capturing Beautiful Moments",
    description: "Premier photography studio in Dubai specializing in wedding and baby photoshoots",
    url: 'https://mgphotographyae.com',
    siteName: 'MG Photography',
    type: 'website',
    images: [
      {
        url: '/images/mg_photography_baby.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MG Photography - Professional Photography Services',
    description: 'Wedding and baby photoshoot specialists in Dubai, UAE',
    images: ['/images/mg_photography_baby.jpg'],
  },
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1
    }
  },
  // Add favicon configurations
  icons: {
    icon: [
      { 
        url: '/images/favicon-96x96.png', 
        sizes: '96x96', 
        type: 'image/png' 
      },
      { 
        url: '/images/favicon.svg', 
        type: 'image/svg+xml' 
      },
      { 
        url: '/images/favicon.ico' 
      }
    ],
    apple: [
      { 
        url: '/images/apple-touch-icon.png', 
        sizes: '180x180' 
      }
    ],
    other: [
      {
        rel: 'manifest',
        url: '/site.webmanifest'
      }
    ]
  }
};

// Create a JSON-LD script for improved SEO
function generateJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "MG Photography",
    "image": "https://mgphotographyae.com/logo.jpg",
    "description": "Premier photography studio specializing in wedding, baby, and portrait photography in Dubai, UAE",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Thanjavur, India",
      "addressLocality": "Dubai",
      "addressRegion": "Dubai",
      "postalCode": "00000",
      "addressCountry": "AE"
    },
    "url": "https://mgphotographyae.com",
    "telephone": "+917373031924",
    "priceRange": "AED3000",
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    },
    "service": [
      {
        "@type": "Service",
        "name": "Wedding Photography"
      },
      {
        "@type": "Service",
        "name": "Baby Photoshoot"
      },
      {
        "@type": "Service",
        "name": "Event Photography"
      }
    ]
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD for enhanced SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateJsonLd())
          }}
        />
        <meta name="google-site-verification" content="idoPDpyA4egD24KvhEccfIQngONezEwLLSPH9q0YZRY" />

      </head>
      <body className={`${generalsans.variable} antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}