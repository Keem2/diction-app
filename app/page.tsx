'use client'

import SearchBar from '../components/searchbar/searchbar'
import Landing from '../components/landing'
import React, { useEffect, useState } from 'react';


export default function Home(){

  //Retrieving the localStorage key 'currentTypeFace' and setting it as currentTypeFace state variable's inital value
  //font-serif is default
  let font;
  if(typeof window !=="undefined"){
  font = JSON.parse(window.localStorage.getItem('currentTypeFace') || '"font-serif"');
  }
  const [currentTypeFace, setCurrentTypeFace] = useState<string|undefined>(font);


  /**
  * Re-renders the component after localStorage key 'currentTypeFace' changes,
  * changing the div's styling using currentTypeFace state variable based on localStorage key value
  */
  useEffect(() =>{
  const updateTypography = () => {
     let typeface = JSON.parse(window.localStorage.getItem('currentTypeFace') || '{}');
     
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
  },[])

  return (
    <div className={`${currentTypeFace}`}>
      <section className='my-6 mx-3'>
      <SearchBar placeholder='Search for a word... ' variant='filled' focusBorderColor='#D52DD5'/>
      </section>

      <section className='flex items-center justify-center h-96'>
        <Landing />
      </section>
   </div>
  )
  }

