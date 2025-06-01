import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import MobileNav from '@/components/MobileNav'
import Script from 'next/script'
import CookieConsent from '@/components/CookieConsent'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Light of Light - Holistic Wellness Platform',
  description: 'Your interactive sanctuary for exploring divine wisdom, nature\'s signs, holistic healing, and fostering inner growth.',
  metadataBase: new URL('https://light-of-light.vercel.app'),
  openGraph: {
    title: 'Light of Light - Holistic Wellness Platform',
    description: 'Your interactive sanctuary for exploring divine wisdom, nature\'s signs, holistic healing, and fostering inner growth.',
    url: 'https://light-of-light.vercel.app',
    siteName: 'Light of Light',
    locale: 'en_US',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: 'your-google-site-verification',
  },
  alternates: {
    canonical: 'https://light-of-light.vercel.app',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="description" content="Your interactive sanctuary for exploring divine wisdom, nature's signs, holistic healing, and fostering inner growth." />
        
        {/* Google AdSense Script */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXXXXXXXXXX"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
        
        {/* Cookie Consent Script */}
        <Script
          id="cookie-consent-config"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.cookieconsent = {
                "position": "bottom",
                "theme": "classic",
                "palette": {
                  "popup": {
                    "background": "#000000",
                    "text": "#ffffff"
                  },
                  "button": {
                    "background": "#f1d600",
                    "text": "#000000"
                  }
                },
                "content": {
                  "message": "We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.",
                  "dismiss": "Got it!",
                  "link": "Learn more",
                  "href": "/privacy-policy"
                },
                "cookie": {
                  "name": "light_of_light_cookie_consent",
                  "domain": "light-of-light.vercel.app",
                  "path": "/",
                  "expiryDays": 365
                }
              };
            `
          }}
        />
        <Script
          src="https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <MobileNav />
        <CookieConsent />
      </body>
    </html>
  )
}