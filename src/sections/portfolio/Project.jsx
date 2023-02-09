import React from 'react'
import Card from '../../components/Card'

const Project = ({ project }) => {
  return (
    <Card className="portfolio-project">
      <div className="portfolio-project-image">
        <img src={project.image} alt="Portfolio project image" />
      </div>
      <h4>{project.title}</h4>
      <p>{project.description}</p>
      <div className="portfolio-project-cta">
        <a
          href={project.demo}
          className="btn sm"
          target="_blank"
          rel="noopner norefereer"
        >
          Demo
        </a>
        <a
          href={project.github}
          className="btn sm primary"
          target="_blank"
          rel="noopner norefereer"
        >
          Github
        </a>
      </div>
    </Card>
  )
}

export default Project
