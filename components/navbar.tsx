'use client';

import React from 'react'
import { Gelasio } from 'next/font/google'
import { Dropdown } from './dropdown/dropdown';

const gelasio = Gelasio({ 
  weight:['400','500','600','700'],
  subsets: ['latin'] })

  /**
 * NAVBAR COMPONENT
 * THIS IS THE NAVIGATION BAR ON THE TOP OF THE PAGE
 * @returns NAVBAR COMPONENT
 */
//type Props = {}

export const Navbar = () => {
  return (
    <div className='flex justify-between items-middle'>
        <p className="font-logo text-black text-3xl mt-1 select-none">diction</p>

        
        <div className='flex justify-between gap-7'>

          <div className='relative bottom-2 -mr-3'>
         <Dropdown/>
         </div>

            <div className='border-l-2 border-gray-300 h-6 mr-1'></div>

            <svg xmlns="http:/www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer -ml-1">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>

        </div>
        </div>
  )
}