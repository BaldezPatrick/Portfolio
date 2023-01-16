import React, { useState, useEffect } from 'react'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faReact,
  faHtml5,
  faCss3,
  faJsSquare,
  faGitAlt,
  faPython,
} from '@fortawesome/free-brands-svg-icons'
import Loader from 'react-loaders'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 1500)
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim,
            dicta? Esse, modi corrupti sapiente beatae eum ad est maxime
            voluptatum autem veritatis culpa quos qui molestiae ipsum dolore
            repudiandae facilis!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            velit inventore quaerat eveniet sint. Possimus corrupti eligendi
            optio, ipsum nisi tempora eos explicabo vitae, eaque error suscipit
            incidunt enim tenetur.
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            veniam ducimus, a fuga praesentium dicta. Officia corporis corrupti
            repellendus amet minus ipsa atque porro tempore cupiditate.
            Architecto fuga cupiditate officia.
          </p>
        </div>

        <div className="stage-cube-cont">
          <div className="cubespinner">
            <div className="face1">
              <FontAwesomeIcon icon={faReact} color="#28A4D9" />
            </div>
            <div className="face2">
              <FontAwesomeIcon icon={faHtml5} color="#F06529" />
            </div>
            <div className="face3">
              <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
            </div>
            <div className="face4">
              <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
            </div>
            <div className="face5">
              <FontAwesomeIcon icon={faGitAlt} color="#F06529" />
            </div>
            <div className="face6">
              <FontAwesomeIcon icon={faPython} color="#EFD81D" />
            </div>
          </div>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default About
