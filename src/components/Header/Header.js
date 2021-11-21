/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import {ThemeContext} from '../../context'
import styles from './Header.module.css'

const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext)

    return (
      <header className={`${theme === 'light' ? styles.header_light : styles.header_dark}`}>
            <figure className={`${theme === 'light' ? styles.header_figure_light : styles.header_figure_dark}`}>vinaykumar</figure>
            <nav>
              <ul className={styles.header_ul}>
                  <li className={styles.header_li}>
                    <Link to='/' className={`${theme === 'light' ? styles.header_a_light : styles.header_a_dark}`}>
                      home
                    </Link>
                  </li>
                  <li className={styles.header_li}>
                    <Link to='/blogs' className={`${theme === 'light' ? styles.header_a_light : styles.header_a_dark}`}>
                      blogs
                    </Link>
                  </li>
                  <li className={styles.header_li}>
                    <Link to='/projects' className={`${theme === 'light' ? styles.header_a_light : styles.header_a_dark}`}>
                      projects
                    </Link>
                  </li>
                  <li className={styles.header_li}>
                    <Link to='/aboutme' className={`${theme === 'light' ? styles.header_a_light : styles.header_a_dark}`}>
                      about
                    </Link>
                  </li>
              </ul>
            </nav>
            <button 
              onClick={() => {
                theme === 'light' ? setTheme('dark') : setTheme('light')
              } }
              className={`${theme === 'light' ? styles.theme_btn_light : styles.theme_btn_dark}`}
            >
              🌓
            </button>
      </header>
    )
}
  
export default Header
