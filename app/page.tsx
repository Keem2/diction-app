import { Gelasio } from 'next/font/google'
import SearchBar from '../components/searchbar/searchbar'

const gelasio = Gelasio({ 
  weight:['400','500','600','700'],
  subsets: ['latin'] })

export default function Home() {
  return (
    <div className={gelasio.className}>

      <section className='my-6 mx-3'>
      <SearchBar placeholder='Search for a word...' variant='filled' focusBorderColor='#D52DD5'/>
      </section>

      <p>hi</p>

   </div>
  )
}
