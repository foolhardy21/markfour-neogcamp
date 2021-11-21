/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import './App.module.css'

import Main from "./components/Main/Main"
import Footer from "./components/Footer/Footer"

const App = () => {
  const [theme, setTheme] = useState('light')

  return (
    <>
          <Main />
          <Footer />
    </>
  )
}

export default App
