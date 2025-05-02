export const TURNS = {
  X: '❌',
  O: '⚪',
}

export const WINNER = {
  X: '❌',
  O: '⚪',
  NONE: 'none',
  TIE: 'tie',
}

export const WINNING_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

export const DEFAULT_BOARD = Array(9).fill(null)

export const KEYS = {
  BOARD: 'board',
  TURN: 'turn',
  WINNER: 'winner',
}
