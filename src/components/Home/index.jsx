import React, { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = [' ', 'P', 'a', 't', 'r', 'i', 'c', 'k']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
  ]

  useEffect(() => {
    setTimeout(() => {
        setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _12`}>I</span>
            <span className={`${letterClass} _12`}>'m</span>
            <AnimatedLetters letterClass={letterClass} strArray={nameArray}  idx={15}/>
            <br />
            <AnimatedLetters letterClass={letterClass} strArray={jobArray}  idx={22}/>
          </h1>
          <h2>Frontend Developer / ReactJs / JavaScript</h2>
          <Link to="/contact" className="flat-button">
            Contact
          </Link>
        </div>
      </div>
      <Loader type='pacman' />
    </>
  )
}

export default Home
