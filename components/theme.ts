import { extendTheme } from '@chakra-ui/react'
import { dropdownTheme } from './dropdown/dropdownStyle';
import { searchBarTheme } from './searchbar/searchBarStyle';

const theme = extendTheme({
  components: {
    Menu: dropdownTheme,
    Input: searchBarTheme
  },
})

export default theme