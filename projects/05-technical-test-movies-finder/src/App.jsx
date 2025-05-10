import { useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)

  //useRef is a hook that returns a mutable ref object that can be used to store a value between renders
  // this values persist between renders
  const isFirstRender = useRef(true)

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = search === ''
      return
    }
    if (search === '') {
      setError('Please enter a search term')
      return
    }
    if (search.length < 3) {
      setError('Search term must be at least 3 characters long')
      return
    }

    setError(null)
  }, [search])

  return { search, isFirstRender, error, setSearch }
}

function App() {
  const { search, isFirstRender, error, setSearch } = useSearch()
  const { movies } = useMovies()

  const handleChange = e => {
    const newQuery = e.target.value
    setSearch(newQuery)
  }

  const handleSubmit = e => {
    e.preventDefault()

    // uncontrolled form - React is not aware of the form
    // const fields = Object.fromEntries(new FormData(e.target))
    // const { query } = fields // from DOM

    console.log({ search }) // from state
  }

  return (
    <div className='page'>
      <header>
        <h1>Technical test - Movies Finder</h1>
        <hr />
        <form className='form' onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            name='search'
            value={search}
            type='text'
            placeholder='Stars Wars, Matrix, Avatar, ...'
          />
          <button type='submit'>Search</button>
        </form>
        {!isFirstRender.current && error && <p style={{ color: 'red' }}>{error}</p>}
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
