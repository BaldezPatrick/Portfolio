import React from 'react'
import './skills.css';
import Card from '../../components/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJs } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container skills-container">
        <Card className="service light">
            <div className="service-icon">
                <FontAwesomeIcon icon={faJs
                } />
            </div>
        </Card>
      </div>
    </section>
  )
}

export default Skills