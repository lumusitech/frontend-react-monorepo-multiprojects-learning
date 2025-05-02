import { DEFAULT_BOARD, KEYS, TURNS, WINNER } from '../../constans'

export const save = (key, value) => {
  if (!key || !value) return

  const stringifiedValue = JSON.stringify(value)
  localStorage.setItem(key, stringifiedValue)
}

export const load = key => {
  if (!key) return

  const value = localStorage.getItem(key)

  try {
    return JSON.parse(value)
  } catch (error) {
    console.error(`🔥 Error parsing JSON from localStorage 🔥\nERROR: ${error}`)
    localStorage.clear()
    return null
  }
}

export const clearStorage = () => {
  localStorage.clear()
}

export const loadBoard = () => {
  const savedBoard = load(KEYS.BOARD) ?? DEFAULT_BOARD

  const isValidBoard = Array.isArray(savedBoard) && savedBoard.length === 9
  if (!isValidBoard) {
    return DEFAULT_BOARD
  }

  return savedBoard
}

export const loadTurn = () => {
  const savedTurn = load(KEYS.TURN) ?? TURNS.X

  const exists = TURNS[savedTurn]
  if (!exists) {
    return TURNS.X
  }

  return savedTurn
}

export const loadWinner = () => {
  const savedWinner = load(KEYS.WINNER) ?? WINNER.NONE

  const exists = WINNER[savedWinner]
  if (!exists) {
    return WINNER.NONE
  }

  save(KEYS.WINNER, savedWinner)
  return savedWinner
}
