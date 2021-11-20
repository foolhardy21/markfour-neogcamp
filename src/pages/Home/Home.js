import React, { useEffect } from 'react'
import styles from './Home.module.css'

const Home = () => {

    useEffect(() => {
        document.title = 'VinayKumar'
    },[])

    return (
        <section className={styles.hero}>
            <p className={styles.hero_headline}>
                Learning and Building<br/>Web Apps<span className={styles.highlight}>.</span>
            </p>
        </section>
    )
}

export default Home