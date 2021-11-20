import React, { useEffect } from 'react'
import styles from './About.module.css'

const About = () => {

    useEffect(() => {
        document.title = 'About | VinayKumar'
    },[])

    return (
        <section className={styles.about_section}>
            <p>Started with HTML, CSS, JavaScript, React in Feb 2021.</p><br />
            <p>Graduated with Computer Science and Engineering in July 2021.</p><br />
            <p> Joined a service based company as a Software Engineer in July 2021.</p><br />
            <p className={styles.highlight}>Soon to be a Web Developer.</p>
        </section>
    )
}

export default About