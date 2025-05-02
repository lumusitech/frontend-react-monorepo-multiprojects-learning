import { WINNING_COMBOS } from '../constans'

export const checkWinner = board => {
  for (const combo of WINNING_COMBOS) {
    const [a, b, c] = combo
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }

  return null
}

export const checkEndGame = board => {
  return board.every(square => square !== null)
}
