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

export const Dropdown = () => {

  const [typeFace, setTypeFace] = useState("Serif");

  useEffect(() => {
    localStorage.setItem('currentTypeFace', JSON.stringify(typeFace))
    window.dispatchEvent(new Event('storage'));
  },[typeFace])


  return (
    <ChakraProvider theme={theme}>
    <Menu>
  <MenuButton as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={1.5} stroke="#D52DD5" className="w-4 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

}>
    {typeFace}
  </MenuButton>
  <MenuList>
    <MenuItem onClick={()=>setTypeFace('Serif')}>Serif</MenuItem>
    <MenuItem onClick={()=>setTypeFace('Sans Serif')}>Sans Serif</MenuItem>
    <MenuItem onClick={()=>setTypeFace('Monospace')}>Monospace</MenuItem>
  </MenuList>
</Menu>
</ChakraProvider>
  )
};
