'use client';

import SearchBar from '../components/searchbar/searchbar'
import Landing from '../components/landing'
import React, { useEffect, useState } from 'react';
import { Dropdown } from '../components/dropdown/dropdown';


export default function Home() {
  let font;

  font = JSON.parse(window.localStorage.getItem('currentTypeFace') || '{}');
   
   
 
   const [currentTypeFace, setCurrentTypeFace] = useState(font);

 
   /**
   * Re-renders the component after changing the dropdown value
   */
  
  useEffect(() =>{
    const updateTypography = () => {
       const typeface = JSON.parse(window.localStorage.getItem('currentTypeFace') || '{}');
       
      if(typeface === "font-mono"){
        setCurrentTypeFace('font-mono');
      } else if(typeface === "font-sans"){
        setCurrentTypeFace('font-sans');
      } else if(typeface === "font-serif"){
        setCurrentTypeFace('font-serif');
      }
    }

    window.addEventListener('storage', updateTypography);
    return () => window.removeEventListener('storage',updateTypography)
  },[font])


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

