import { useEffect, useState, useRef } from 'react'
import debounce from '../utils/debounce'

const Techstack = ({ technologies }) => {
  const [clickedCard, setClickedCard] = useState(null)
  const [shouldHideOverflow, setShouldHideOverflow] = useState(false)
  const techstackRef = useRef(null)

  const handleClickOutside = (event) => {
    if (techstackRef.current && !techstackRef.current.contains(event.target)) {
      setClickedCard(null)
    }
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShouldHideOverflow(true)
    }, 2000) // adjust the timeout as needed

    window.addEventListener('click', handleClickOutside)

    return () => {
      clearTimeout(timeoutId)
      window.removeEventListener('click', handleClickOutside)
    }
  }, [])

  return (
    <div className="techstack-box" ref={techstackRef}>
      {technologies.map((tech, id) => {
        const { icon, title } = tech
        const isClicked = clickedCard === id

        const handleCardClick = debounce((id) => {
          setClickedCard(isClicked ? null : id)
        }, 200)

        return (
          <div
            className={`tech-cards ${isClicked ? 'flip' : ''}`}
            key={id}
            onClick={() => handleCardClick(id)}
            style={{ overflow: shouldHideOverflow ? 'hidden' : 'visible' }}
          >
            <span className="front-face">{icon}</span>
            <span className="back-face">{title}</span>
          </div>
        )
      })}
    </div>
  )
}

export default Techstack
