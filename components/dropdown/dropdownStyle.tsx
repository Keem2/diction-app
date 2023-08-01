import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    // this will style the MenuButton component
    fontWeight: 'light',
    _hover: {
      color: 'white',
    },
  },
  list: {
    // this will style the MenuList component
    bg:'white',
    py: '1',
    borderRadius: 'xl',
    boxShadow:'md',
    border: 'none',
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: 'black',
    _hover: {
      color: '#D52DD5',
    },
  },
})
// export the base styles in the component theme
export const dropdownTheme = defineMultiStyleConfig({ baseStyle })