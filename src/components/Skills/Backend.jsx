import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPython, faJava, faNode } from '@fortawesome/free-brands-svg-icons'
const Backend = () => {
  return (
    <>
      <div className="skills__content">
        <h3 className="skills__title">Back-end Developer</h3>
        <div className="skills__box">
          <div className="skills__group">
            <div className="skills__data">
            <FontAwesomeIcon icon={faPython}/>
              <div>
                <h3 className="skills_name">Python</h3>
              </div>
            </div>
            <div className="skills__data">
            <FontAwesomeIcon icon={faJava}/>
              <div>
                <h3 className="skills_name">Java</h3>
              </div>
            </div>
            <div className="skills__data">
            <FontAwesomeIcon icon={faNode}/>
              <div>
                <h3 className="skills_name">NodeJs</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Backend
