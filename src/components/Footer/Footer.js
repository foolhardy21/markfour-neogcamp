/* eslint-disable no-unused-vars */
import React from 'react'
import styles from './Footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
const Footer = () => {
    return (
      <footer>
            <a href='https://github.com/foolhardy21' target='_blank' rel="noreferrer">
              github
              <GitHubIcon style={{ color: 'white', fontSize: '2vmax' }} />
            </a>
            <a href='https://www.linkedin.com/in/vinay-kumar-279a91167/' target='_blank' rel="noreferrer">
              linkedin
              <LinkedInIcon style={{ color: 'white', fontSize: '2vmax' }} />
            </a>
            <a href='https://twitter.com/foolhardy_vinay' target='_blank' rel="noreferrer">
              twitter
              <TwitterIcon style={{ color: 'white', fontSize: '2vmax' }} />
            </a>
      </footer>
    )
  }
  
  export default Footer
  