import React from 'react'
import './header.css'

const Header = () => {
  return (
    <section id="header">
      <div className="container header-container">
        <div className="header-profile">
          <h3>Patrick Baldez</h3>
          <p>
            You are a click away from bulding your dream website. Send me the details of your project for a modern, responsive, highly performat website today!
          </p>
          <div className="header-cta">
            <a href="#contact">Let's Talk</a>
            <a href="#portfolio">My work</a>
          </div>
          <div className="header-socials">
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default Header
