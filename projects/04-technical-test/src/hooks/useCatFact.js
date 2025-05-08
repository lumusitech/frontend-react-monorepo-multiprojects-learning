import { useEffect, useState } from 'react'
import { getRandomFact } from '../services/getRandomFact'

export const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(fact => setFact(fact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}
