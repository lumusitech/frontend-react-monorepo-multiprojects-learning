import debounce from 'just-debounce-it'
import { useCallback, useEffect, useRef, useState } from 'react'
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
  const [sort, setSort] = useState(false)
  const { search, isFirstRender, error, setSearch } = useSearch()
  const { movies, getMovies, error: moviesError, loading } = useMovies({ search, sort })

  const debouncedGetMovies = useCallback(
    debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 1000),
    [getMovies],
  )

  const handleChange = e => {
    const newQuery = e.target.value
    setSearch(newQuery)
    debouncedGetMovies(newQuery)
  }

  const handleSubmit = e => {
    e.preventDefault()

    getMovies({ search })

    // uncontrolled form - React is not aware of the form
    // const fields = Object.fromEntries(new FormData(e.target))
    // const { query } = fields // from DOM

    // console.log({ search }) // from state
  }

  const handleSort = () => {
    setSort(!sort)
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

          <input type='checkbox' onChange={handleSort} checked={sort} />

          {!isFirstRender.current && error && <p style={{ color: 'red' }}>{error}</p>}
          <button type='submit'>Search</button>
        </form>
      </header>

      <main>
        {moviesError && <p style={{ color: 'red' }}>{moviesError}</p>}
        {loading ? <p>Loading...</p> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
