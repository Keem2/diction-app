import React from 'react'
import useSWR from 'swr'
import { Skeleton } from '@chakra-ui/react';

const fetcher = (args:any) => fetch(args).then((res) => res.json());

type Props = {
    word:string
}
   
export default function Result(props:Props) {
    const { data, error } = useSWR(`https://api.dictionaryapi.dev/api/v2/entries/en/${props.word}`, fetcher)
 
    if (error) return <div>Failed to load</div>
    if (!data) return <Skeleton height='20px'/>

    console.log(data);

    const result = data.map((result:any):any => 
        (
        <>
            <section className='flex justify-between mb-6'>
            <div>
        <h1 className='text-4xl mt-3 md:text-5xl font-bold '>{result.word}</h1>
        <p className='text-base mt-4 text-purple-600 md:text-lg'>{result.phonetic}</p>
        </div>

        <div>
        {result.phonetics[0].audio === '' ? 
         <button className='bg-purple-300 rounded-full py-4 px-4' onClick={()=>{
            let audio = new Audio(result.phonetics[1].audio);
            audio.play();
        }}><svg xmlns="http://www.w3.org/2000/svg" fill="#650D65" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#650D65" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
    </button> : <button className='bg-purple-300 rounded-full py-4 px-4' onClick={()=>{
            let audio = new Audio(result.phonetics[0].audio);
            audio.play();
        }}><svg xmlns="http://www.w3.org/2000/svg" fill="#650D65" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#650D65" className="w-8 h-8">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
        </svg>
    </button>
        }
        </div>
        </section>
    
        
        {// Meanings Array
        }

        {result.meanings.map ((results:any):any =>
        <>
        <div className='flex'>
        <p className='font-bold mb-6'>{results.partOfSpeech}</p>
        <div className='relative -top-8 left-5 border-b-2 border-neutral-300 dark:border-neutral-600 w-full'></div>
        </div>
        <p className='text-neutral-500 dark:text-neutral-400'>Meaning</p>
        {results.definitions.map((def:any):any =>
            <ul className='list-disc marker:text-purple-600 mt-3 text-base md:text-lg'>
                <li className='ml-10'>{def.definition}</li>
            </ul>
        )}
        <br/>

        {results.synonyms.length === 0 ? 
        <p></p>
        : (
        <div className='mb-6'>
        <p className='inline mr-4 text-neutral-500 dark:text-neutral-400'>Synonyms</p>
        {results.synonyms.map((synonyms:any):any =>
        <ul className='inline'>
            <p className='text-purple-600 inline mx-3'>{synonyms}</p>
        </ul>
        )}
        </div>
        )}
        
        </>
        )
        }
        <div className='flex flex-col md:flex-row mb-24'>
        <p className='inline text-neutral-500 dark:text-neutral-400'>Source</p> <a target="_blank" className='underline ml-2'href={result['sourceUrls']}>{result['sourceUrls']} <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#a7a7a7" className="w-5 h-5 mb-1 inline ml-2 text-white">
  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
</svg>
</a>
</div>


        </>
        )
    );

    return (
        <>
        {result}
        </>
    )
  }