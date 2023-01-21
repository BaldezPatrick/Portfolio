import React from 'react'
import './skills.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faJs,
  faHtml5,
  faCss3,
  faReact,
  faPython,
  faNodeJs,
} from '@fortawesome/free-brands-svg-icons'

const Skills = () => {
  return (
    <>
      <section className="container-sk">
        <h1>Skills</h1>
        <div className="container-skills">
          <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faJs} />
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faPython} />
          <FontAwesomeIcon icon={faNodeJs} />
        </div>
      </section>
    </>
  )
}

export default Skills
