import movies from '../mocks/with-results.json'
// import withoutResults from '../mocks/no-results.json'

export const useMovies = () => {
  const mappedMovies = movies.Search.map(({ Title, Year, Poster, imdbID }) => ({
    title: Title,
    year: Year,
    poster: Poster,
    id: imdbID,
  }))
  return { movies: mappedMovies }
}
