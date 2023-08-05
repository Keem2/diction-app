'use client'

import React from 'react';


const Landing = () => {
  return (
    <div className={`flex flex-col gap-y-5 text-center`}>
        <h1 className='text-5xl font-bold md:text-6xl'>Welcome to <span className='font-logo font-medium'>diction</span></h1>

        <p className='text-xl text-gray-500 md:text-2xl'>A simple, online dictionary &#128214;</p>

        <p className='text-lg text-gray-500 md:text-xl'>Search a word. Any word.</p>
    </div>
  )
}

export default Landing