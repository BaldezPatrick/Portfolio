import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
const Social = () => {
  return (
    <>
      <div className="home__social">
        <a href="https://github.com" className="home__social-icon" target="_blank">
          <FontAwesomeIcon icon={faGithub} />
        </a>

        <a href="https://linkedin.com" className="home__social-icon" target="_blank">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </>
  )
}

export default Social
