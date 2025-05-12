import { useCallback, useMemo, useRef, useState } from 'react'
import { searchMovies } from '../services/searchMovies'

export const useMovies = ({ search, sort }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const previousSearch = useRef(search)

  // without useCallback this function will be recreated every time the component is rendered
  const getMovies = useCallback(async ({ search }) => {
    if (previousSearch.current === search) return

    try {
      setError(null)
      setLoading(true)
      previousSearch.current = search
      const newMovies = await searchMovies({ search })
      setMovies(newMovies)
    } catch (error) {
      setError(error.message)
    } finally {
      setLoading(false)
    }
  }, [])

  // render again and again when change search. We don't want that. We want to sort only when movies or sort change
  // const sortedMovies = sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies

  // Better way, but not recommended always, only use when you have a lot of data or performance issues
  const sortedMovies = useMemo(() => {
    return sort ? [...movies].sort((a, b) => a.title.localeCompare(b.title)) : movies
  }, [sort, movies])

  return { movies: sortedMovies, getMovies, error, loading }
}
