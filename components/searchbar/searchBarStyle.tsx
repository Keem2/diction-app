import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

/**
 * SEARCHBARSTYLE.TSX 
 * FILE TO CHANGE DEFAULT STYLE OF INPUT BAR.
 * SOME STYLES CAN BE CHANGED HERE, OTHERS IN PROPS. REFER TO CHAKRA UI DOCS
 */

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontFamily: 'sans-serif', // change the font family
    color: 'black', // change the input text color
    py:'6',
    borderRadius:'16',

    _dark:{
      color:'white',
      bg:'#434243'
    },
  },
})

export const searchBarTheme = defineMultiStyleConfig({ baseStyle })