'use client'

import React, { useState, useEffect } from 'react'
import  Dropdown  from './dropdown/dropdown';
import { useColorMode } from '@chakra-ui/react';
import { useTheme } from 'next-themes';


  /**
 * NAVBAR COMPONENT
 * THIS IS THE NAVIGATION BAR ON THE TOP OF THE PAGE
 * @returns NAVBAR COMPONENT
 */
//type Props = {}


//state required to set dark mode with svg (next-themes)
export const Navbar = () => {
  const {toggleColorMode} = useColorMode();

  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();


  useEffect(() => {
    setMounted(true);
  }, []);


  if (!mounted) {
    return null;
  }


  return (
    <div className='flex justify-between items-middle'>
        <p className="font-logo text-black text-3xl mt-1 select-none dark:text-white">diction</p>

        
        <div className='flex justify-between gap-7'>

          <div className='relative bottom-2 -mr-3 rounded-md'>
         <Dropdown/>
         </div>

            <div className='border-l-2 border-gray-300 h-6 mr-1'></div>

            {theme === 'light' ? (
            <svg xmlns="http:/www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer -ml-1" onClick={()=>{
              toggleColorMode();
              setTheme("dark");
            }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
</svg>):(
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 cursor-pointer -ml-1" onClick={()=>{
    toggleColorMode();
    setTheme("light");
  }}>
  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
</svg>
          )}
    

        </div>
        </div>
  )
}