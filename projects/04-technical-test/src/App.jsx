import { useEffect, useState } from 'react'
import './App.css'

const CAT_ENDPOINT_RANDOM_CAT = 'https://catfact.ninja/fact'
const CAT_ENDPOINT_RANDOM_CAT_IMG = 'https://cataas.com/cat/says' // hello --> ${firstWord}

const a = [].slice(0, 3)

export const App = () => {
  const [fact, setFact] = useState()
  const [img, setImg] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_CAT)
      .then(res => res.json())
      .then(data => setFact(data.fact))
  }, [])

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`${CAT_ENDPOINT_RANDOM_CAT_IMG}/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(data => setImg(data.url))
  }, [fact])

  return (
    <main>
      <h1>Catty App</h1>

      {fact && <p>{fact}</p>}
      {img && <img src={img} width='300' alt={`Image cat extracted from three words of ${fact}`} />}
    </main>
  )
}
