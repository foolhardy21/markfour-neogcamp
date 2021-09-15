import React from 'react'
import { Link } from 'react-router-dom'

import styles from './Header.module.css'

const Header = () => {
    return (
      <header>
            <figure>vk</figure>
            <nav>
              <ul>
                  <Link to='/'>
                    <li>home</li>
                  </Link>
                  <Link to='/aboutme'>
                    <li>about</li>
                  </Link>
                  <Link to='/projects'>
                  <li>projects</li>
                  </Link>
                  <Link to='/blogs'>
                    <li>blogs</li>
                  </Link>
              </ul>
            </nav>
      </header>
    )
  }
  
  export default Header
  
  //@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;700&display=swap');
  //font-family: 'Playfair Display', serif;