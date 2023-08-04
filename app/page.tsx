
import SearchBar from '../components/searchbar/searchbar'
import Landing from '../components/landing'


export default function Home() {
  let font = 'font-serif';
  return (
    <div className={font}>
      <section className='my-6 mx-3'>
      <SearchBar placeholder='Search for a word...' variant='filled' focusBorderColor='#D52DD5'/>
      </section>

      <section className='flex items-center justify-center h-96'>
        <Landing/>
      </section>

   </div>
  )
}
