import { useState } from 'react'

import confetti from 'canvas-confetti'

import './App.css'
import { ActiveTurn } from './components/ActiveTurn'
import { Board } from './components/Board'
import { HeaderGame } from './components/HeaderGame'
import { WinnerModal } from './components/WinnerModal'
import { DEFAULT_BOARD, KEYS, TURNS, WINNER } from './constans'
import { checkEndGame, checkWinner } from './logic/board'
import { loadBoard, loadTurn, loadWinner, save } from './logic/storage'

function App() {
  const [board, setBoard] = useState(() => loadBoard())
  const [turn, setTurn] = useState(() => loadTurn())
  const [winner, setWinner] = useState(() => loadWinner())

  const updateBoard = index => {
    if (board[index]) return

    const newBoard = [...board]
    newBoard[index] = turn
    save(KEYS.BOARD, newBoard)
    setBoard(newBoard)

    const newWinner = checkWinner(newBoard)

    if (newWinner) {
      confetti()
      save(KEYS.WINNER, newWinner)
      setWinner(newWinner)
      return
    } else if (checkEndGame(newBoard)) {
      save(KEYS.WINNER, WINNER.TIE)
      setWinner(WINNER.TIE)
      return
    } else {
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X

      save(KEYS.WINNER, WINNER.NONE)
      setWinner(WINNER.NONE)

      save(KEYS.TURN, newTurn)
      setTurn(newTurn)
    }
  }

  const resetBoard = () => {
    setBoard(DEFAULT_BOARD)
    save(KEYS.BOARD, DEFAULT_BOARD)
    setTurn(TURNS.X)
    save(KEYS.TURN, TURNS.X)
    setWinner(WINNER.NONE)
    save(KEYS.WINNER, WINNER.NONE)
  }

  return (
    <main className='board'>
      <HeaderGame title='Tic Tac Toe' resetBoard={resetBoard} />

      <Board board={board} updateBoard={updateBoard} />

      <ActiveTurn turn={turn} />

      <WinnerModal winner={winner} resetBoard={resetBoard} />
    </main>
  )
}

export default App
