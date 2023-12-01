'use client'

import React, { useEffect, useState } from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,
    ChakraProvider,
  } from '@chakra-ui/react'
  import theme from '../theme';

/**
 * DROPDOWN COMPONENT
 * THIS IS THE DROPDOWN MENU IN NAVBAR
 * @returns DROPDOWN COMPONENT
 */
//type Props = {}

//constant CURRENT_TYPEFACE used as localStorage key 
const CURRENT_TYPEFACE = 'currentTypeFace';

//variable fontTypeString used to set dropdown button name/value
let fontTypeString = '';


const Dropdown = () => {
  /**
   * Initalising localStorage key 'currentTypeFace' to dropdown button name/value
   * font-serif is default value
   */

  let fontType;
  if(typeof window !== 'undefined'){

    fontType = JSON.parse(window.localStorage.getItem(CURRENT_TYPEFACE) || '"font-serif"');

if(fontType === 'font-serif'){
  fontTypeString = 'Serif'
} else if(fontType === 'font-sans'){
  fontTypeString = 'Sans Serif'
} else if(fontType === 'font-mono'){
  fontTypeString = 'Monospace'
}
}

 /**
   * Placing  dropdown button name/value from above code as state
   */
  
  const [typeFace, setTypeFace] = useState(fontType);

  /**
   *Setting localStorage key 'currentTypeFace' to typeFace and invoking storage event when typeFace state variable updates
   */

  useEffect(() =>{
    window.localStorage.setItem(CURRENT_TYPEFACE, JSON.stringify(typeFace))

    window.dispatchEvent(new Event('storage'));
    }
  ,[typeFace])
  

     /** FUNCTION CHANGETYPEFACE 
      * 
      * CHANGES typeFace state variable ONCLICK, 
      * Sets dropdown name/value based on TypeFace state variable,
      * and sets localStorage key 'currentTypeFace' with the value 
      * as the typeFace state variable
   * @param typeface - font style set in tailwind.config
   * 
   */
  const changeTypeFace = (typeface:string) =>{
    setTypeFace(typeface);
    
    if(typeface == 'font-serif'){
      fontTypeString = 'Serif'
    } else if(typeface == 'font-sans'){
      fontTypeString = 'Sans Serif'
    } else if(typeface == 'font-mono'){
      fontTypeString = 'Monospace'
    }

    window.localStorage.setItem('currentTypeFace', JSON.stringify(typeface))
    window.dispatchEvent(new Event('storage'));
  }
  

//px in menubutton fixed overflow issue
  return (
    <ChakraProvider theme={theme}>
    <Menu>
  <MenuButton px={5} _expanded={{ bg: 'gray.200', _dark:{bg:'#434243'} }} className=' text-black dark:text-white dark:hover:bg-neutral-700 ml-8' as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={1.5} stroke="#D52DD5" className="w-4 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
}>
    <p className={`${typeFace}`}>{fontTypeString}</p>
  </MenuButton>
  <MenuList>
    <MenuItem className= 'font-serif' onClick={()=>changeTypeFace('font-serif')}>Serif</MenuItem>
    <MenuItem className= 'font-sans' onClick={()=>changeTypeFace('font-sans')}>Sans Serif</MenuItem>
    <MenuItem  className= 'font-mono' onClick={()=>changeTypeFace('font-mono')}>Monospace</MenuItem>
  </MenuList>
</Menu>
</ChakraProvider>
  )
};

export default Dropdown;
