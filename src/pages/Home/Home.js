import React, { useEffect, useContext } from 'react'
import {ThemeContext} from '../../context'
import styles from './Home.module.css'

const Home = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'VinayKumar'
    },[])

    return (
        <section className={`${theme==='light' ? styles.hero_light : styles.hero_dark}`}>
            <p className={`${theme==='light' ? styles.hero_headline_light : styles.hero_headline_dark}`}>
                Learning and Building<br/>Web Apps
                <span className={`${theme==='light' ? styles.highlight_light : styles.highlight_dark}`}>.</span>
            </p>
        </section>
    )
}

export default Home