import { useEffect, useState } from 'react'

const CAT_ENDPOINT_RANDOM_CAT_IMG = 'https://cataas.com/cat/says'

export const useCatImage = ({ fact }) => {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')
    fetch(`${CAT_ENDPOINT_RANDOM_CAT_IMG}/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(data => setImageUrl(data.url))
  }, [fact])
  return { imageUrl }
}
