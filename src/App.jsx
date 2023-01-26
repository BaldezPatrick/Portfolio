import React from 'react'
import {
  About,
  Contact,
  FAQs,
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
      <FAQs />
      <Contact />
      <Footer />
      <FloatingNav />
    </main>
  )
}

export default App
