/* eslint-disable no-unused-vars */
import React from 'react'
import { HashRouter as Router, Switch, Route } from 'react-router-dom'

import Header from "../../components/Header/Header"
import Home from '../../pages/Home/Home'
import About from '../../pages/About/About'
import Project from '../../pages/Project/Project'
import BlogList from '../../pages/BlogList/BlogList'
import Blog1 from '../../pages/Blogs/Blog1/Blog1'
import Blog2 from '../../pages/Blogs/Blog2/Blog2'

const Main = () => {
    return (
      
            <Router>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/aboutme' component={About} />
                <Route path='/projects' component={Project} />
                <Route path='/blogs' exact component={BlogList} />
                <Route path='/blogs/factory-functions' component={Blog1} />
                <Route path='/blogs/prototypal-inheritance' component={Blog2} />
              </Switch>
            </Router>
      
    )
  }
  
  export default Main
  