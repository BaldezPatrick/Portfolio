import React from 'react'
import './header.css'
import data from './data'

const Header = () => {
  return (
    <section id="header">
      <div className="container header-container">
        <h3>Patrick Baldez</h3>
        <p>
          Are you looking for a talented and passionate web developer to help
          bring your vision to life? Look no further! I specialize in creating
          elegant and engaging web solutions that are tailored to meet the
          specific needs of my clients.
        </p>
        <div className="header-cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My work
          </a>
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
