/* eslint-disable no-unused-vars */
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import styles from './Main.module.css'

import Header from "../../components/Header/Header"
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Project from '../../pages/Project/Project'
import BlogList from '../../pages/Blog/BlogList'
import Blog from '../../pages/Blog/Blog'

const Main = () => {
    return (
      
            <Router>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/aboutme' component={About} />
                <Route path='/projects' component={Project} />
                <Route path='/blogs' exact component={BlogList} />
                <Route path='/blogs/:url' component={Blog} />
              </Switch>
            </Router>
      
    )
  }
  
  export default Main
  