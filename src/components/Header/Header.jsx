import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose, faArrowDown } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <header className="container-header">
        <div className="container-logo-icon">
          <a>PB</a>
          {showMenu ? (
            <div id="close-icon" onClick={() => setShowMenu(!showMenu)}>
              <FontAwesomeIcon icon={faClose} />
            </div>
          ) : (
            <div id="close-icon" onClick={() => setShowMenu(!showMenu)}>
              <FontAwesomeIcon icon={faArrowDown} />
            </div>
          )}
        </div>
        <nav className={showMenu ? "container-nav" : "container-nav menu-closed"}>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
    </>
  )
}

export default Header
