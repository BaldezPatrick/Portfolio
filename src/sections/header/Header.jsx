import React from 'react'
import './header.css'
import data from './data'

const Header = () => {
  return (
    <section id="header">
      <div className="container header-container">
        <div className="header-profile">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nostrum architecto voluptatum laboriosam quasi illo numquam rerum? Error, veritatis non!
        </div>
          <h3>Patrick Baldez</h3>
          <p>
            You are a click away from bulding your dream website. Send me the
            details of your project for a modern, responsive, highly performat
            website today!
          </p>
          <div className="header-cta">
            <a href="#contact" className='btn primary'>Let's Talk</a>
            <a href="#portfolio" className='btn light'>My work</a>
          </div>
          <div className="header-socials">
            {data.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            ))}
          </div>
      </div>
    </section>
  )
}

export default Header
