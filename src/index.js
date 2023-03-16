import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ModalProvider } from './context/modalContext'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import { ThemeProvider } from './context/themeContext'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <ThemeProvider>
    <ModalProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ModalProvider>
  </ThemeProvider>
)
