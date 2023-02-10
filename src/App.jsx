import React from 'react'
import {
  About,
  Contact,
  Footer,
  FloatingNav,
  Header,
  NavBar,
  Portfolio,
  Skills,
} from './sections'

const App = () => {
  return (
    <main>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  )
}

export default App
