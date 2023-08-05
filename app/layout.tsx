import { Gelasio, Plus_Jakarta_Sans, Inconsolata } from 'next/font/google'
import './globals.css'
import { Navbar }from '../components/navbar';
import type { Metadata } from 'next';
import { Providers } from "./providers";
import Nossr from './nossr';

export const metadata: Metadata = {
  title: 'Diction',
  description: 'A dictionary web app, by Akeem Smith',
}

const gelasio = Gelasio({ 
  weight:['400','500','600','700'],
  subsets: ['latin'],
  display:'swap',
  variable:'--font-gelasio'
})

const plusJakarta = Plus_Jakarta_Sans({
  weight:['300','400','500','600','700'],
  subsets: ['latin'],
  variable:'--font-plus-jakarta-sans'
})

const inconsolata = Inconsolata({
  weight:['300','400','500','600','700'],
  subsets: ['latin'],
  variable:'--font-inconsolata'
})

/**
 * 
 * NOSSR tags wrapped around layout to disable SSR. Was getting hydration errors on refresh 
 * 
 */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gelasio.variable} ${plusJakarta.variable} ${inconsolata.variable}`}>
      <body className='overflow-x-hidden'>
        <div className='mt-10 mx-5 lg:mx-52'>
        <Nossr>
          <Providers >
        <Navbar />
        {children}
        </Providers>
        </Nossr>
        </div>
      </body>
    </html>
    
  )
}
