/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import styles from './Main.module.css'

import Header from "../../components/Header/Header"
import Home from '../../pages/Home'
import About from '../../pages/About'
import Project from '../../pages/Project'
import Blog from '../../pages/Blog'

const Main = () => {
    return (
      
            <Router>
              <Header />
              <Switch>
                <Route exact path='/' >
                  <Home />
                </Route>
                <Route exact path='/aboutme' >
                  <About />
                </Route>
                <Route exact path='/projects' >
                  <Project />
                </Route>
                <Route exact path='/blogs' >
                  <Blog />
                </Route>
              </Switch>
            </Router>
      
    )
  }
  
  export default Main
  