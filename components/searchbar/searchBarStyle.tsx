import { inputAnatomy } from '@chakra-ui/anatomy'
import { createMultiStyleConfigHelpers } from '@chakra-ui/react'

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(inputAnatomy.keys)

const baseStyle = definePartsStyle({
  // define the part you're going to style
  field: {
    fontFamily: 'sans-serif', // change the font family
    color: 'black', // change the input text color
    py:'6',
    borderRadius:'15'
  },
})

export const searchBarTheme = defineMultiStyleConfig({ baseStyle })