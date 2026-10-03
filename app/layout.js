import './globals.css'
import { Poppins, Open_Sans, Montserrat, Cormorant_Garamond } from 'next/font/google'
import { CITY_DISPLAY } from '../lib/config'
import localFont from 'next/font/local'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

const openSans = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jost',
  display: 'swap',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
})

const nephilm = localFont({
  src: '../public/fonts/Nephilm.otf',
  variable: '--font-nephilm',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://godrejveranosector63a.co.in'),
  title: 'Godrej Verano Sector 63A | Luxury 3, 4 & 5 BHK Apartments Gurugram',
  description: 'Godrej Verano Sector 63A Gurugram offers luxury 3, 4 & 5 BHK residences starting ₹5.91 Cr*. HARERA Registered project with premium bay living amenities. Enquire for details!',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Godrej Verano Sector 63A | Luxury 3, 4 & 5 BHK Apartments Gurugram',
    description: 'Godrej Verano Sector 63A Gurugram offers luxury 3, 4 & 5 BHK residences starting ₹5.91 Cr*. HARERA Registered project with premium bay living amenities. Enquire for details!',
    url: 'https://godrejveranosector63a.co.in',
    siteName: 'Godrej Verano Sector 63A',
    type: 'website',
  },
  icons: {
    icon: '/favicon/favicon.png',
    shortcut: '/favicon/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId="GTM-575H8R87" />
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" />
      </head>
      <body className={`${poppins.variable} ${openSans.variable} ${montserrat.variable} ${cormorant.variable} ${nephilm.variable} font-sans text-dark antialiased`}>
        <Script id="gtag-init" strategy="beforeInteractive">
          {`window.dataLayer = window.dataLayer || [];
window.dataLayer.push({ 'city': '${CITY_DISPLAY}' });
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());`}
        </Script>
        {children}
      </body>
    </html>
  )
}
