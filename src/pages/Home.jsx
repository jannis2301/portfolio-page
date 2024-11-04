import { Link } from 'react-router-dom'
import { AnimatedLetters, Loader } from '../components'
import { useTextAnimation } from '../hooks/useTextAnimation'
import codeThinking from '../assets/images/code-thinking.svg'

const Home = () => {
  const nameArray = 'Jannis'.split('')
  const jobArray = 'web developer.'.split('')

  const letterClass = useTextAnimation()

  return (
    <>
      <section className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            &nbsp;
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
          </h1>
          <h2>Frontend Developer</h2>
          <Link to="/contact" className="btn" aria-label="contact page">
            CONTACT ME
          </Link>
        </div>
        <img className="solid-logo" src={codeThinking} alt="code-thinking" />
      </section>
      <Loader />
    </>
  )
}

export default Home
