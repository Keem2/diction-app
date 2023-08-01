'use client'

import React from 'react'
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
//type Props = {}

export const Dropdown = () => {
  return (
    <ChakraProvider theme={theme}>
    <Menu>
  <MenuButton as={Button} rightIcon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 18" strokeWidth={1.5} stroke="#D52DD5" className="w-4 h-6 ml-2">
  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg>

}>
    Serif
  </MenuButton>
  <MenuList>
    <MenuItem>Serif</MenuItem>
    <MenuItem>Sans Serif</MenuItem>
    <MenuItem>Monospace</MenuItem>
  </MenuList>
</Menu>
</ChakraProvider>
  )
};
