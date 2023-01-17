import React, { useState } from 'react'
import './header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHome,
  faUser,
  faFileAlt,
  faBriefcase,
  faFile,
  faContactCard,
  faXmark,
  faTableCells,
} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <>
      <header className="header">
        <nav className="nav container">
          <a href="index.html" className="nav__logo">
            Patrick
          </a>
          <div className={showMenu ? 'nav__menu show-menu' : 'nav__menu'}>
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="nav__icon">
                    <FontAwesomeIcon icon={faHome} />
                  </i>{' '}
                  Home
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="nav__icon">
                    <FontAwesomeIcon icon={faUser} />
                  </i>{' '}
                  About
                </a>
              </li>

              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="nav__icon">
                    <FontAwesomeIcon icon={faFileAlt} />
                  </i>{' '}
                  Skills
                </a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="nav__icon">
                    <FontAwesomeIcon icon={faBriefcase} />
                  </i>{' '}
                  Services
                </a>
              </li>

              <li className="nav__item">
                <a href="#portfolio" className="nav__link">
                  <i className="nav__icon">
                    <FontAwesomeIcon icon={faFile} />
                  </i>{' '}
                  Portfolio
                </a>
              </li>

              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="nav__icon">
                    <FontAwesomeIcon icon={faContactCard} />
                  </i>{' '}
                  Contact
                </a>
              </li>
            </ul>

            <i className="nav__close" onClick={() => setShowMenu(!showMenu)}>
              <FontAwesomeIcon icon={faXmark} />
            </i>
          </div>

          <div className="nav__toggle" onClick={() => setShowMenu(!showMenu)}>
            <FontAwesomeIcon icon={faTableCells} />
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header
