import { menuAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers, defineStyle } from '@chakra-ui/react'

/**
 * DROPDOWNSTYLE.TSX 
 * FILE TO CHANGE DEFAULT STYLE OF DROPDOWN IN NAVBAR.
 * SOME STYLES CAN BE CHANGED HERE, OTHERS IN PROPS. REFER TO CHAKRA UI DOCS
 */

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(menuAnatomy.keys)

// define the base component styles
const baseStyle = definePartsStyle({
  // define the part you're going to style
  button: {
    color:'black',
    bg:'teal.500',
    _hover: {
      color: 'white',
      bg:'white',
    },

    _dark:{
      color:'white',
      _hover:{
        color:'red.200'
      },

    }
  },
  list: {
    // this will style the MenuList component
    py: '1',
    borderRadius: 'xl',
    boxShadow:'md',
    border: 'none',
    _dark:{
    bg:'#434243'
    },
  },
  item: {
    // this will style the MenuItem and MenuItemOption components
    color: '#434243',
    _hover: {
      color: '#D52DD5',
    },

    _dark:{
      color:'white',

      _hover:{
        color: '#D52DD5',
        
      }
    }
  },
  groupTitle:{
    color:'white'
  }
})
// export the base styles in the component theme
export const dropdownTheme = defineMultiStyleConfig({ baseStyle })