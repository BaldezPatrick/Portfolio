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
import Theme from './theme/Theme'

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
      <Theme />
      <FloatingNav />
    </main>
  )
}

export default App
