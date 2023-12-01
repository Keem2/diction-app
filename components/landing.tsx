
import React from 'react';

const Landing = () => {
  return (
    <div className={`flex flex-col gap-y-5 text-center overflow-hidden`}>
        <h1 className='text-5xl font-bold md:text-6xl text-black dark:text-white'>Welcome to <span className='font-logo font-medium '>diction</span></h1>

        <p className='text-xl text-gray-500 md:text-2xl dark:text-gray-400'>A simple, online dictionary &#128214;</p>

        <p className='text-lg text-gray-500 md:text-xl dark:text-gray-400'>Search a word. Any word.</p>
    </div>
  )
}

export default Landing