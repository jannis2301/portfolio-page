import { AnimatedLetters, Loader, PortfolioCard } from '../components'
import { useTextAnimation } from '../hooks/useTextAnimation'
import portfolio from '../data/portfolio'

const Portfolio = () => {
  const aboutArray = 'Portfolio'.split('')
  const letterClass = useTextAnimation()
  return (
    <>
      <section className="container portfolio-page">
        <h1 className="page-title">
          <AnimatedLetters
            letterClass={letterClass}
            strArray={aboutArray}
            idx={15}
          />
        </h1>
        <PortfolioCard portfolio={portfolio} />
      </section>
      <Loader />
    </>
  )
}

export default Portfolio
