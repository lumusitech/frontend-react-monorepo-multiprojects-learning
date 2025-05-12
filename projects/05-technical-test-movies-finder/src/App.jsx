import debounce from 'just-debounce-it' // Importa just-debounce-it
import React, { useEffect, useRef, useState } from 'react'
import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function useSearch() {
  const [search, setSearch] = useState('')
  const [error, setError] = useState(null)
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
  const {
    movies,
    getMovies,
    error: moviesError,
    loading,
  } = useMovies({
    search,
    sort,
  })
  const [debouncedGetMovies, setDebouncedGetMovies] = useState(null)

  useEffect(() => {
    // Create debounced function once only when component mounts
    const debouncedFn = debounce(search => {
      console.log('search', search)
      getMovies({ search })
    }, 500) // Usar 500ms

    setDebouncedGetMovies(() => debouncedFn)

    return () => {
      debouncedFn.cancel()
    }
  }, [getMovies])

  const handleChange = e => {
    const newQuery = e.target.value
    setSearch(newQuery)
    if (debouncedGetMovies) {
      debouncedGetMovies(newQuery)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    getMovies({ search })
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
