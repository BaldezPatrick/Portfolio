import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faBootstrap, faJs, faReact } from '@fortawesome/free-brands-svg-icons'

const Frontend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Front-end Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
              <FontAwesomeIcon icon={faHtml5} />
              <div>
                <h3 className="skills_name">HTML</h3>
              </div>
            </div>
            <div className="skills__data">
              <FontAwesomeIcon icon={faCss3} />
              <div>
                <h3 className="skills_name">CSS</h3>
              </div>
            </div>
            <div className="skills__data">
            <FontAwesomeIcon icon={faBootstrap}/>
              <div>
                <h3 className="skills_name">Bootstrap</h3>
              </div>
            </div>
            <div className="skills__data">
            <FontAwesomeIcon icon={faJs}/>
              <div>
                <h3 className="skills_name">JavaScript</h3>
              </div>
            </div>
            <div className="skills__data">
            <FontAwesomeIcon icon={faReact}/>
              <div>
                <h3 className="skills_name">ReactJs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Frontend
