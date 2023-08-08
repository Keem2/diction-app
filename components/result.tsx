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
        <div>
        <h1 className='text-5xl font-bold '>{result.word}</h1>
        <p className='mt-3 text-purple-600'>{result.phonetic}</p>
        

            {result.phonetics.map((button:any):any =>
            <>
            <button className='bg-purple-300 rounded-full py-4 px-4' onClick={()=>{
                let audio = new Audio(button.audio);
                audio.play();
            }}><svg xmlns="http://www.w3.org/2000/svg" fill="#A611A6" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#A611A6" className="w-8 h-8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
            </svg>
        </button>
            </>
            )}

        
        {// Meanings Array
        }

        {result.meanings.map ((results:any):any =>
        <>
        <p>{results.partOfSpeech}</p>
        <p>Meaning</p>
        {results.definitions.map((def:any):any =>
            <ul className='list-disc marker:text-purple-600'>
                <li className=''>{def.definition}</li>
            </ul>
        )}
        <br/>
        </>
        )
        }
        <p>{result['sourceUrls']}</p>
        </div>
        )
    );

    return (
        <>
        {result}
        </>
    )
  }