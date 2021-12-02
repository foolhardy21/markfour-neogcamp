/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Header from "../../components/Header/Header"
import Home from '../../pages/Home/Home'
import Resume from '../../pages/Resume/Resume'
import About from '../../pages/About/About'
import Project from '../../pages/Project/Project'
import BlogList from '../../pages/BlogList/BlogList'
import Blog1 from '../../pages/Blogs/Blog1/Blog1'
import Blog2 from '../../pages/Blogs/Blog2/Blog2'
import Blog3 from '../../pages/Blogs/Blog3/Blog3'

const Main = () => {
    return (
      
            <Router>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/resume' component={Resume} />
                <Route path='/aboutme' component={About} />
                <Route path='/projects' component={Project} />
                <Route path='/blogs' exact component={BlogList} />
                <Route path='/blogs/factory-functions' component={Blog1} />
                <Route path='/blogs/prototypal-inheritance' component={Blog2} />
                <Route path='/blogs/react-and-seo' component={Blog3} />
              </Switch>
            </Router>
      
    )
  }
  
  export default Main
  