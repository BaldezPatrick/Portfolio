import React, { useEffect, useRef, useState } from 'react'
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
  const elementRef = useRef();
  const [showNavFloating, setShowNavFloating] = useState(true);
  const [yPOsition, setYPosition] = useState(0);

  const showFloatNav = () => setShowNavFloating(true);

  const hideFloatNav = () => setShowNavFloating(false);

  const floatingToggle = () => {
    if(yPOsition < (elementRef?.current?.getBoundingClientRect().y - 20) || yPOsition < (elementRef?.current?.getBoundingClientRect().y + 20)) {
      showFloatNav();
    } else {
      hideFloatNav()
    }

    setYPosition(elementRef?.current?.getBoundingClientRect().y)
  }

  useEffect(() => {
    const checkY = setInterval(floatingToggle, 500);

    return () => clearInterval(checkY);

  }, [yPOsition])

  return (
    <main className={`${themeState.primary} ${themeState.background}`} ref={elementRef}>
      <NavBar />
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
      <Theme />
      { showNavFloating && <FloatingNav />}
    </main>
  )
}

export default App
