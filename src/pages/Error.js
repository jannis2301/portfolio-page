import notFound from '../assets/images/not-found.svg'
import { AnimatedLetters, Loader } from '../components'
import { useTextAnimation } from '../hooks/useTextAnimation'

const Error = () => {
  const errorArray = 'Page not found'.split('')
  const letterClass = useTextAnimation()

  return (
    <>
      <section className="container error-page">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={errorArray}
            idx={15}
          />
        </h1>
        <img src={notFound} alt="not-found" />
      </section>
      <Loader />
    </>
  )
}
export default Error
