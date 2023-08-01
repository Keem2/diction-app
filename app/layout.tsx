
import './globals.css'
import { Navbar }from '../components/navbar';
import type { Metadata } from 'next';
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: 'Diction',
  description: 'A dictionary web app, by Akeem Smith',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
