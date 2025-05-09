function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(({ id, title, year, poster }) => (
        <li key={id}>
          <h3>{title}</h3>
          <p>{year}</p>
          <img src={poster} alt={title} />
        </li>
      ))}
    </ul>
  )
}

function WithoutMovies() {
  return <h3>No movies found</h3>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return <div>{hasMovies ? <ListOfMovies movies={movies} /> : <WithoutMovies />}</div>
}
