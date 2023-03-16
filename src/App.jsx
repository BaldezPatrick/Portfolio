import React from 'react'
import { useThemeContext } from './context/themeContext'
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
  const { themeState } = useThemeContext();

  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
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
