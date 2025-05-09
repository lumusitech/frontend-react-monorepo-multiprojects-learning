import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <div className='page'>
      <header>
        <h1>Technical test - Movies Finder</h1>
        <hr />
        <form className='form'>
          <input type='text' placeholder='Stars Wars, Matrix, Avatar, ...' />
          <button>Search</button>
        </form>
      </header>

      <main>
        <Movies movies={movies} />
      </main>
    </div>
  )
}

export default App
