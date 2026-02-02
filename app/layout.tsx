import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { GISBackground } from '@/components/gis-background'
import './globals.css'

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'AI-Powered GIS & Geospatial Analytics SaaS Platform | BMINDSET TECHNOLOGY',
  description:
    'Enterprise-grade GIS SaaS platform delivering AI-powered geospatial analytics, satellite data processing, climate risk mapping, and spatial decision intelligence.',
  metadataBase: new URL('https://www.bmindsets.com'),
  generator: 'BMINDSET TECHNOLOGY',
  keywords: [
    'GIS',
    'geospatial',
    'spatial analytics',
    'satellite data',
    'remote sensing',
    'location intelligence',
    'AI GIS',
    'climate analytics',
    'mapping platform',
    'environmental monitoring',
    'spatial decision support',
    'cloud GIS',
    'enterprise geospatial software',
    'sustainability analytics',
    'GIS software',
    'Geographic Information System',
    'Geospatial technology',
    'Geospatial analytics',
    'Spatial data analytics',
    'Location intelligence platform',
    'Mapping and GIS solutions',
    'Enterprise GIS platform',
    'Cloud GIS software',
    'GIS SaaS platform',
    'AI-powered GIS',
    'Geospatial AI platform',
    'Machine learning for GIS',
    'Spatial AI analytics',
    'Predictive geospatial analytics',
    'Intelligent mapping platform',
    'Automated GIS analysis',
    'Decision intelligence using GIS',
    'Satellite data analytics',
    'Remote sensing GIS platform',
    'Earth observation analytics',
    'Satellite imagery processing',
    'Multispectral satellite analysis',
    'Geospatial remote sensing software',
    'Time-series satellite data analysis',
    'Climate risk mapping',
    'Climate intelligence platform',
    'Environmental GIS solutions',
    'Climate resilience analytics',
    'Disaster risk GIS platform',
    'Flood and drought risk mapping',
    'Climate early warning system',
    'Environmental monitoring GIS',
    'Agricultural GIS platform',
    'Precision agriculture GIS',
    'Crop monitoring using satellite data',
    'Drought monitoring GIS',
    'Water resource GIS',
    'Soil and land use mapping',
    'Forest monitoring GIS',
    'Fisheries spatial analytics',
    'Smart city GIS platform',
    'Urban planning GIS',
    'Infrastructure mapping software',
    'Public sector GIS solutions',
    'Land management GIS',
    'Cadastral GIS system',
    'Utility network GIS',
    'Transportation GIS analytics',
    'Enterprise geospatial platform',
    'Cloud-based GIS SaaS',
    'Scalable GIS architecture',
    'Multi-tenant GIS platform',
    'API-based GIS services',
    'Geospatial data platform',
    'Custom GIS software development',
    'GIS software for climate risk analysis',
    'GIS platform for drought monitoring',
    'Satellite-based crop monitoring software',
    'AI GIS solution for decision making',
    'Enterprise GIS SaaS for governments',
    'Geospatial analytics platform for NGOs',
  ],
  alternates: {
    canonical: 'https://www.bmindsets.com',
  },
  openGraph: {
    type: 'website',
    url: 'https://www.bmindsets.com',
    siteName: 'BMINDSET TECHNOLOGY',
    title: 'AI-Powered GIS & Geospatial Analytics SaaS Platform | BMINDSET TECHNOLOGY',
    description:
      'Enterprise-grade GIS SaaS platform delivering AI-powered geospatial analytics, satellite data processing, climate risk mapping, and spatial decision intelligence.',
    images: [
      {
        url: '/icon-512.png',
        width: 512,
        height: 512,
        alt: 'BMINDSET TECHNOLOGY logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered GIS & Geospatial Analytics SaaS Platform | BMINDSET TECHNOLOGY',
    description:
      'Enterprise-grade GIS SaaS platform delivering AI-powered geospatial analytics, satellite data processing, climate risk mapping, and spatial decision intelligence.',
    images: ['/icon-512.png'],
  },
  icons: {
    icon: [
      {
        url: '/favicon.ico',
      },
      {
        url: '/icon-32.png',
        type: 'image/png',
        sizes: '32x32',
      },
      {
        url: '/icon-192.png',
        type: 'image/png',
        sizes: '192x192',
      },
    ],
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <GISBackground />
        <div className="relative z-10">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
