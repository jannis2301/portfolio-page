import React, { useState } from 'react'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'

const PortfolioCard = ({ portfolio }) => {
  let cardsPerPage = 4
  const [startIndex, setStartIndex] = useState(0)

  const handleNext = () => {
    if (startIndex + cardsPerPage < portfolio.length) {
      setStartIndex(startIndex + cardsPerPage)
    }
  }

  const handlePrev = () => {
    if (startIndex - cardsPerPage >= 0) {
      setStartIndex(startIndex - cardsPerPage)
    }
  }

  const numDots = Math.ceil(portfolio.length / cardsPerPage)
  const activeDot = Math.floor(startIndex / cardsPerPage)

  const handleDotClick = (dotIndex) => {
    setStartIndex(dotIndex * cardsPerPage)
  }

  return (
    <>
      <div className="portfolio-container">
        {portfolio
          .slice(startIndex, startIndex + cardsPerPage)
          .map((item, id) => {
            const { png, webp, title, url } = item
            return (
              <div className="portfolio-card" key={startIndex + id}>
                <picture>
                  <source type="image/webp" srcSet={png} />
                  <source type="image/png" srcSet={webp} />
                  <img className="portfolio-img" src={png} alt={title} />
                </picture>
                <div className="portfolio-content">
                  <h3 className="title">{title}</h3>
                  <a
                    className="btn portfolio-btn"
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View
                  </a>
                </div>
              </div>
            )
          })}
      </div>
      {portfolio.length > cardsPerPage && (
        <div className="portfolio-nav">
          <button
            className="btn"
            onClick={handlePrev}
            disabled={startIndex === 0}
          >
            <FaChevronLeft />
          </button>
          <div className="dots">
            {Array.from({ length: numDots }, (_, i) => (
              <button
                key={i}
                className={`dot ${i === activeDot ? 'active' : ''}`}
                onClick={() => handleDotClick(i)}
              />
            ))}
          </div>
          <button
            className="btn"
            onClick={handleNext}
            disabled={startIndex + cardsPerPage >= portfolio.length}
          >
            <FaChevronRight />
          </button>
        </div>
      )}
    </>
  )
}

export default PortfolioCard
