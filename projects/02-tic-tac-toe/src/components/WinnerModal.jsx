import { WINNER } from '../constans'
import { Square } from './Square'

export const WinnerModal = ({ winner, resetBoard }) => {
  if (winner === WINNER.NONE) {
    return null
  }

  const winnerText = winner === WINNER.TIE ? 'Empate' : `Ganó:`

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>

        <header className='win'>
          {winner && <Square>{winner === WINNER.TIE ? '🤝' : winner}</Square>}
        </header>

        <footer>
          <button onClick={resetBoard}>Reiniciar</button>
        </footer>
      </div>
    </section>
  )
}
