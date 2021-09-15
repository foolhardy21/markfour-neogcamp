import React from 'react'
import styles from './Home.module.css'

const Home = () => {
    return (
        <section className={styles.hero}>
            <p className={styles.hero_headline}>
                Learning and Building<br/>Web Apps<span className={styles.highlight}>.</span>
            </p>
        </section>
    )
}

export default Home