import { useEffect, useState } from 'react'

export const useTextAnimation = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    let timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return letterClass
}
