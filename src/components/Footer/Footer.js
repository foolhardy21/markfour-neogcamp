import React from 'react'
import styles from './Footer.module.css'
import GitHubIcon from '@material-ui/icons/GitHub'
import TwitterIcon from '@material-ui/icons/Twitter'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
const Footer = () => {
    return (
      <footer>
            <a href='https://github.com/foolhardy21' target='_blank'>
              <GitHubIcon style={{ color: 'white' }} />
            </a>
            <a href='https://www.linkedin.com/in/vinay-kumar-279a91167/' target='_blank'>
              <LinkedInIcon style={{ color: 'white' }} />
            </a>
            <a href='https://twitter.com/foolhardy_vinay' target='_blank'>
              <TwitterIcon style={{ color: 'white' }} />
            </a>
      </footer>
    )
  }
  
  export default Footer
  