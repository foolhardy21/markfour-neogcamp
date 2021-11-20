/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
    return (
      <header>
            <figure>vk</figure>
            <nav>
              <ul>
                  <li>
                    <Link to='/'>
                      home
                    </Link>
                  </li>
                  <li>
                    <Link to='/aboutme'>
                      about
                    </Link>
                  </li>
                  <li>
                    <Link to='/projects'>
                      projects
                    </Link>
                  </li>
                  <li>
                    <Link to='/blogs'>
                      blogs
                    </Link>
                  </li>
              </ul>
            </nav>
      </header>
    )
  }
  
  export default Header
  
  //@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap');
  //font-family: 'Playfair Display', serif;