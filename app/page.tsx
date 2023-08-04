'use client';

import SearchBar from '../components/searchbar/searchbar'
import Landing from '../components/landing'
import React, { useEffect, useState } from 'react';


export default function Home() {
  let font:string; 

  const [currentTypeFace, setCurrentTypeFace] = useState('');

  /**
   * Re-renders the component after changing the dropdown value
   */
  useEffect(() =>{
    const updateTypography = () => {
       const typeface = JSON.parse(localStorage.getItem('currentTypeFace') || '{}');

       
      if(typeface === "Monospace"){
        setCurrentTypeFace('font-mono');
      } else if(typeface === "Sans Serif"){
        setCurrentTypeFace('font-sans');
      } else if(typeface === "Serif"){
        setCurrentTypeFace('font-serif');
      }
    }

    window.addEventListener('storage', updateTypography);
    return () => window.removeEventListener('storage',updateTypography)
  },[])




  return (

    <div className={currentTypeFace}>
      <section className='my-6 mx-3'>
      <SearchBar placeholder='Search for a word...' variant='filled' focusBorderColor='#D52DD5'/>
      </section>

      <section className='flex items-center justify-center h-96'>
        <Landing/>
      </section>

   </div>
  )
}
