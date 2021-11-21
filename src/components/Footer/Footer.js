/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import {ThemeContext} from '../../context'
import styles from './Footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'

const Footer = () => {
  const {theme} = useContext(ThemeContext)

    return (
      <footer className={`${theme==='light' ? styles.footer_light : styles.footer_dark}`}>
            <a className={`${theme==='light' ? styles.footerlink_light : styles.footerlink_dark}`} href='https://github.com/foolhardy21' target='_blank' rel="noreferrer">
              github
              <GitHubIcon />
            </a>
            <a className={`${theme==='light' ? styles.footerlink_light : styles.footerlink_dark}`} href='https://www.linkedin.com/in/vinay-kumar-279a91167/' target='_blank' rel="noreferrer">
              linkedin
              <LinkedInIcon />
            </a>
            <a className={`${theme==='light' ? styles.footerlink_light : styles.footerlink_dark}`} href='https://twitter.com/foolhardy_vinay' target='_blank' rel="noreferrer">
              twitter
              <TwitterIcon />
            </a>
      </footer>
    )
  }
  
  export default Footer
  