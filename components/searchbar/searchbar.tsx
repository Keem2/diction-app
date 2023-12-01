'use client'

import React, { useState, useRef } from 'react'
import { ChakraProvider, Input, InputGroup, InputRightElement} from '@chakra-ui/react'
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from '@chakra-ui/react'
import theme from '../theme';

/**
 * SEARCHBAR COMPONENT
 * THIS IS THE INPUT BAR ON THE PAGE
 * @returns SEARCHBAR COMPONENT
 */
type Props = {
    placeholder:string,
    variant?:string,
    focusBorderColor?:string,
    setValue:any,
    setTimesSearched:any
}


let isError:boolean=false;

const SearchBar = (props: Props) => {  
  const [input, setInput] = useState('');

  const descref = useRef<any>();
  

  const containsSpecialChars = (str:string):boolean => {
    const specialChars = /[`!@#$%^&*()_+\=\[\]{};/':"\\|,.<>\/?~0123456789]/;
    return specialChars.test(str);
  }


  const validateForm = (event?:any):void =>{
    setInput(event.target.value);

    //useRef used to remove searchbar focus onSubmit
    if(containsSpecialChars(descref.current.value) === true){
      console.log('submitted with special char');
      isError = true;
      } else {
        isError = false;
      }

  }

const submitForm = (event:any) =>{
  event.preventDefault();
  
  descref.current.blur();

  if(input === '' || isError === true){
    return false;
  } else{
    //setting value state variable in page.tsx to input state variable 
    // in searchbar.tsx
    //passed in props
    props.setValue(input);

    //setting timesSearched variable in page.tsx 
    // passed in props
    props.setTimesSearched((prevCount:number) => prevCount+1);
  }
  
}
  
  //bg is setting background color in light mode. 
  //dark mode color is in searchbarstyle.tsx

  //outline-none disable default outline in browsers when input is focused.
  //focused outline is set in props
  return (
    <ChakraProvider theme={theme}>
      <FormControl isInvalid={isError}>
        <form onSubmit={submitForm}>
      <InputGroup>
    <Input bg='#f1f3f3' className='outline-none' placeholder={props.placeholder} variant={props.variant} focusBorderColor={props.focusBorderColor} onChange={validateForm} ref={descref} onSubmit={submitForm}/>
    <InputRightElement>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#D52DD5" className="w-5 h-5 mt-3 mr-3" onClick={submitForm}>
  <path fillRule="evenodd" d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z" clipRule="evenodd" />
</svg>
    </InputRightElement>
    </InputGroup>
    {isError ?(
      <FormErrorMessage>Invalid Input</FormErrorMessage>
    ):<></>}
    </form>
    </FormControl>
    </ChakraProvider>
  )
}

export default SearchBar;