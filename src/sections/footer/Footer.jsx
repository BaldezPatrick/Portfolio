import React from 'react'
import { links, socials } from './data'
import './footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container footer-container">
        <ul className="nav-menu">
          {links.map((link) => (
            <li key={link.id}>
              <a href={link.link}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className="footer-socials">
          {
            socials.map(social => <a key={social.id} href={social.link} target='_blank' rel='noopener noreferrer'>
              {social.icon}
            </a>)
          }
        </div>
      </div>
    </footer>
  )
}

export default Footer
