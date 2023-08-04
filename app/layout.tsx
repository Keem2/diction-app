import { Gelasio, Plus_Jakarta_Sans, Inconsolata } from 'next/font/google'
import './globals.css'
import { Navbar }from '../components/navbar';
import type { Metadata } from 'next';
import { Providers } from "./providers";

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



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${gelasio.variable} ${plusJakarta.variable} ${inconsolata.variable}`}>
      <body className='overflow-x-hidden'>
        <div className='mt-10 mx-5 lg:mx-52'>
          <Providers>
      <Navbar/>
        {children}
        </Providers>
        </div>
        <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      </body>
      
    </html>
  )
}
