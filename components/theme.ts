import { extendTheme } from '@chakra-ui/react'
import { dropdownTheme } from './dropdown/dropdownStyle';
import { searchBarTheme } from './searchbar/searchBarStyle';

/**
 * THEME.TS
 * FILE TO SAVE CHANGES ON DEFAULT STYLING ON CHAKRA UI COMPONENTS.
 * STYLES ARE IN 'componentname'Style.TSX
 */

const theme = extendTheme({
  components: {
    Menu: dropdownTheme,
    Input: searchBarTheme
  },
})

export default theme