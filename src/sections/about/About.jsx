import React from 'react'
import './about.css'
import MontainPhoto from '../../assets/photo-test.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import dataAbout from './data'
import Card from '../../components/Card'

const About = () => {
  return (
    <section id="about">
      <div className="container about-container">
        <div className="about-left">
          <div className="about-photo">
            <img src={MontainPhoto} alt="Montain Photo" />
          </div>
        </div>
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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus, laborum ipsum. Dolorem, laudantium? Veritatis velit
            quo odit dolores vero enim, consequatur recusandae est voluptatem
            ducimus, ullam sit! Voluptates quidem ex assumenda enim modi placeat
            et amet deserunt unde, nam saepe vero qui facere natus error
            doloribus provident dolorum sint numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugiat
            alias ipsa nemo nesciunt ipsam ex suscipit placeat assumenda
            reiciendis explicabo, voluptate dicta, dolores unde et sit excepturi
            culpa laboriosam ut fugit necessitatibus. Eaque culpa sit saepe
            sequi dolorum natus?
          </p>

          <a href={'#'} className="btn primary">
            Download CV <FontAwesomeIcon icon={faDownload} />
          </a>
        </div>
      </div>
    </section>
  )
}

export default About
