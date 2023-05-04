import React from 'react'
import './about.css'
import dataAbout from './data'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-right">
          <h2>About me</h2>
          <div className="about-cards">
            {dataAbout.map((item) => (
              <Card key={item.id} className="about-card">
                <span className="about-card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Hi, there! I'm JavaScript's web developer with over a year of
            expertise in ReactJS. I also have extensive knowledge of NodeJs,
            Python and FastAPI, which allows me to create robust and scalable
            backend solutions for my clients.
          </p>
          <p>
            I take a collaborative and communicative approach to development,
            working closely with my clients to understand their needs and
            requirements. Whether you need a new web application built from
            scratch or want to enhance an existing project, I have the skills
            and experience to help you achieve your goals.
          </p>
          <p>
            So, if you're looking for a talented web developer who can deliver
            high-quality solutions on time and within budget, look no further
            than me. Let's discuss your project and take the first step towards
            building an exceptional web application.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
