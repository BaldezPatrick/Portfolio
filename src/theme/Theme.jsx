import React from 'react'
import Modal from '../components/Modal'
import { primaryColors, backgroundColors } from './data'
import PrimaryColor from './PrimaryColor'
import BackGroundColor from './BackGroundColor'
import './theme.css'

const Theme = () => {
  return (
    <>
      <Modal className="theme-modal">
        <h3>Customize Your Theme</h3>
        <div id="theme-primary-wrapper">
          <h5>Primary Color</h5>
          <div className="theme-primary-colors">
            {primaryColors.map((pColor) => (
              <PrimaryColor
                key={pColor.className}
                className={pColor.className}
              />
            ))}
          </div>
        </div>
        <div className="theme-background-wrapper">
          <h5>Background Color</h5>
          <div className="theme-background-colors">
            {backgroundColors.map((bColor) => (
              <BackGroundColor
                key={bColor.className}
                className={bColor.className}
              />
            ))}
          </div>
        </div>
      </Modal>
    </>
  )
}

export default Theme
