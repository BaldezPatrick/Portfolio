import React from 'react'
import './portfolio.css'
import dataProjects from "./data"
import Projects from './Projects'
import ProjectsCategories from './ProjectsCategories'
import { useState } from 'react'

const Portfolio = () => {
  const [projects, setProjects] = useState(dataProjects);
  const categories = dataProjects.map(project => project.category);
  const uniqueCategories = ["all", ...new Set(categories)];

  const filterProjectsHandler = (category) => {
    if(category === "all") {
      setProjects(dataProjects)
      return;
    }
    const filterProjects = dataProjects.filter(project => project.category === category)
    setProjects(filterProjects)
  }


  return (
    <section id="portfolio">
      <h2>Recent Projects</h2>
      <p>Some projects below. Check them!</p>
      <div className="container portfolio-container">
        {projects.length === 0 ? (
          <p className="no-portfolio-msg">Buliding...</p>
        ) : (
          <>
            <ProjectsCategories
              categories={uniqueCategories}
              onFilterProjects={filterProjectsHandler}
            />
            <Projects projects={projects} />
          </>
        )}
      </div>
    </section>
  )
}

export default Portfolio