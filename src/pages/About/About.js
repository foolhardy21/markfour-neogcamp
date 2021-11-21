import React, { useEffect, useContext } from 'react'
import {ThemeContext} from '../../context'
import styles from './About.module.css'

const About = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'About | VinayKumar'
    },[])

    return (
        <section className={`${theme==='light' ? styles.about_section_light : styles.about_section_dark}`}>
            <p>Started with HTML, CSS, JavaScript, React in Feb 2021.</p><br />
            <p>Graduated with Computer Science and Engineering in July 2021.</p><br />
            <p> Joined Persistent Systems Ltd. as a Software Engineer in August 2021.</p><br />
            <p> Will start with NeogCamp, a Web Dev bootcamp in January 2022.</p><br />
            <p className={`${theme==='light' ? styles.highlight_light : styles.highlight_dark}`}>
                Soon to be a Web Developer.
            </p>
        </section>
    )
}

export default About