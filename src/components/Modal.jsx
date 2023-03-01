import React from 'react'
import ReactDom from 'react-dom'
import Card from './Card'
import { useModalContext } from '../context/modalContext'
import './modal.css'

const Modal = ({ className, children }) => {
  const { showModal, closeModalHandler } = useModalContext()
  return (
    <>
      {showModal &&
        ReactDom.createPortal(
          <>
            <section id="backdrop" onClick={closeModalHandler}></section>
            <Card className={className}>{children}</Card>
          </>,
          document.querySelector('#overlays')
        )}
    </>
  )
}

export default Modal
