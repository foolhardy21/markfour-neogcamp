import React, { useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet'
import {ThemeContext} from '../../context'
import styles from './Home.module.css'

const Home = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'VinayKumar'
    },[])

    return (
        <section className={`${theme==='light' ? styles.hero_light : styles.hero_dark}`}>
            <Helmet>
                <meta property="og:image" content="https://raw.githubusercontent.com/foolhardy21/markfour-neogcamp/main/public/favicon/android-chrome-192x192.png" />
                <meta property="og:title" content="Vinay Kumar" />
                <meta property="og:description" content="Hi, I'm an aspiring Front End Developer. I learn web dev, build projects and write blogs." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@foolhardy_vinay" />
                <meta name="twitter:title" content="Vinay Kumar" />
                <meta name="twitter:description" content="Hi, I'm an aspiring Front End Developer. I learn web dev, build projects and write blogs." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/foolhardy21/markfour-neogcamp/main/public/favicon/android-chrome-192x192.png" />        
            </Helmet>
            <p className={`${theme==='light' ? styles.hero_headline_light : styles.hero_headline_dark}`}>
                Learning and Building<br/>Web Apps
                <span className={`${theme==='light' ? styles.highlight_light : styles.highlight_dark}`}>.</span>
            </p>
        </section>
    )
}

export default Home