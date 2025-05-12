import withoutResults from '../mocks/no-results.json'

const API_KEY = import.meta.env.VITE_API_KEY
const BASE_API_URL = import.meta.env.VITE_BASE_API_URL

export const searchMovies = async ({ search }) => {
  if (search === '') return null

  if (search) {
    try {
      const res = await fetch(`${BASE_API_URL}/?apikey=${API_KEY}&s=${search}`)
      const data = await res.json()
      const movies = data.Search

      return movies?.map(({ Title, Year, Poster, imdbID }) => ({
        title: Title,
        year: Year,
        poster: Poster,
        id: imdbID,
      }))
    } catch (error) {
      console.error(error)
      throw new Error('Something went wrong', { cause: error })
    }
  } else {
    return withoutResults
  }
}
