import { AnimatedLetters, Loader, Techstack } from '../components'
import { useTextAnimation } from '../hooks/useTextAnimation'
import technologies from '../data/technologies'

const About = () => {
  const aboutArray = 'About me'.split('')
  const letterClass = useTextAnimation()

  return (
    <>
      <section className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={aboutArray}
              idx={15}
            />
          </h1>
          <p>
            I am an ambitious front-end developer looking for a position in an
            established IT company to work with a team of developers on
            challenging and cool projects.
          </p>
          <p align="LEFT">
            I have a strong proficiency in HTML, CSS, and JS, with experience in
            React and NodeJS. I'm quiet confident, naturally curious, and
            constantly working to improve my skills.
          </p>
          <p>
            If I had to describe myself in one sentence: An open-minded and
            communicative person, who loves sports, music and technologies!
          </p>
        </div>

        <Techstack technologies={technologies} />
      </section>
      <Loader />
    </>
  )
}

export default About
