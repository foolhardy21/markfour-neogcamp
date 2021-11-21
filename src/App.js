/* eslint-disable no-unused-vars */
import React, { useEffect, useContext } from 'react'
import { ThemeContext } from './context'
import './App.module.css'
import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

const App = () => {
  const {theme} = useContext(ThemeContext)

  useEffect(() => {
    const body = document.getElementById('root')
    theme === 'light' ? body.style.background = '#FFFFFF' :  body.style.background = '#263238'
    
    console.log(body.style.background)
  },[theme])
  return (
    <>
          <Main />
          <Footer />
    </>
  )
}

export default App
