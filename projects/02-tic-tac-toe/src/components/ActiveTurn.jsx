import { TURNS } from '../constans'
import { Square } from './Square'

export const ActiveTurn = ({ turn }) => {
  return (
    <section className='turn'>
      <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
      <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
    </section>
  )
}
