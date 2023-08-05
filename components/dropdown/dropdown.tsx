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
import { type } from 'os';

/**
 * DROPDOWN COMPONENT
 * THIS IS THE DROPDOWN MENU IN NAVBAR
 * @returns DROPDOWN COMPONENT
 */
//type Props = {}


const CURRENT_TYPEFACE = 'currentTypeFace';

let fontTypeString = '';

const Dropdown = () => {
  /**
   * Initalising localStorage currentTypeFace
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
   * Initalising button name
   */
  
  const [typeFace, setTypeFace] = useState(fontType);

  /**
   * Invoking storage event when setItem updates
   */

  useEffect(() =>{
    window.localStorage.setItem(CURRENT_TYPEFACE, JSON.stringify(typeFace))

    window.dispatchEvent(new Event('storage'));
    }
  ,[typeFace])
  

     /**
   * Changing Button name when typeface updates
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
  


  return (
    <ChakraProvider theme={theme}>
    <Menu>
  <MenuButton as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={1.5} stroke="#D52DD5" className="w-4 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>
}>
    {fontTypeString}
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=>changeTypeFace('font-serif')}>Serif</MenuItem>
    <MenuItem onClick={()=>changeTypeFace('font-sans')}>Sans Serif</MenuItem>
    <MenuItem onClick={()=>changeTypeFace('font-mono')}>Monospace</MenuItem>
  </MenuList>
</Menu>
</ChakraProvider>
  )
};

export default Dropdown;
