import { useEffect, useState } from 'react'
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './index.scss'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <>
      <div className="container about-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          As a lifelong enthusiast of technology and its transformative power, my journey has been defined by a relentless curiosity and a passion for innovation. However, my insatiable drive for growth and a keen awareness of the immense potential within the tech industry led me to embark on a transformative journey, culminating in my recent completion of a Software Engineering Immersive Bootcamp. This experience has equipped me with a robust foundation in programming, problem-solving, and a burning desire to make my mark in the ever-evolving tech landscape.
          </p>
          <p align="LEFT">
          I thrive in dynamic environments, where adaptability and a commitment to excellence are paramount. My proficiency in Git, CSS, and HTML showcases my technical acumen in software development, allowing me to create visually stunning and user-centric web interfaces. Moreover, I have actively contributed to agile methodologies, including SCRUM, and participated in SCRUM Poker sessions, where precision, collaboration, and effective project management have been at the forefront of my experiences. These experiences have not only expanded my horizons but also instilled in me a deep appreciation for the iterative and collaborative nature of the tech world.
          </p>
          <p>
          With an unwavering belief in the power of technology to drive positive change, I am poised to embark on a professional journey in the tech space, eager to leverage my skills and experiences to craft innovative solutions, collaborate with like-minded individuals, and contribute to the ever-evolving landscape of transformative technology.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faAngular} color="#DD0031" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About