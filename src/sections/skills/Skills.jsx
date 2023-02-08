import React from 'react'
import './skills.css';
import Card from '../../components/Card'
import dataSkills from './data'

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className="container skills-container">
        {
          dataSkills.map((item) => (
            <Card key={item.id} className="skills light">
              <div className="skills-icon">
                {item.icon}
              </div>
            </Card>
          ))
        }
      </div>
    </section>
  )
}

export default Skills