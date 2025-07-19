import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Footer from './components/Footer'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';



function App() {
  const [search, setSearch] = useState("");

  const handleSubmit= (e) => {
    e.preventDefault();
    return null
  }
  return (
    <>
      <Header/>
      <div className='searchArea'>
        <form onSubmit={handleSubmit}>
          <div className='searchField'>
            <label className='searchLabel' htmlFor="search">Search:</label>
            <input
              className='searchText' 
              type="text"
              id="search"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value) }
            />
            <FontAwesomeIcon id="mag" icon={faMagnifyingGlass} />
           </div>
        </form>
      </div>
      <Card/>
      <Footer/>
    </>
  )
}

export default App
