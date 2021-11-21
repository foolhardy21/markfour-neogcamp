import React, {useEffect, useContext} from 'react'
import {ThemeContext} from '../../context'
import styles from './Project.module.css'
import {projects, intermediate_projects, months} from './projectdata'

const Project = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'Projects | VinayKumar'
    },[])

    return (
        <>
        <p className={`${theme==='light' ? styles.beginnerheading_light : styles.beginnerheading_dark}`}>intermediate</p>
        <section className={`${theme==='light' ? styles.gridsection_light : styles.gridsection_dark}`}>
            {
                intermediate_projects.map(project => {
                    const { name, description, date, source } = project
                    return <article key={name} className={`${theme==='light' ? styles.projectarticle_light : styles.projectarticle_dark}`}>
                        <div className={styles.projecthead}>{name}</div>
                        <div className={styles.projectdescr}>{description}</div>
                        <div className={styles.projectdate}>{date.getDate()} - {months[date.getMonth()]} - {date.getFullYear()}</div>
                        <div className={styles.projectlinks}>
                            <a href={source} target='_blank' rel='noreferrer' className={`${theme==='light' ? styles.projectcode_light : styles.projectcode_dark}`}>code</a>
                        </div>
                    </article> 

                })
            }
        </section>
        <p className={`${theme==='light' ? styles.beginnerheading_light : styles.beginnerheading_dark}`}>beginner (neogCamp level 0)</p>
        <section className={`${theme==='light' ? styles.gridsection_light : styles.gridsection_dark}`}>
            {
                projects.map(project => {
                    const { name, description, date, url, source } = project
                    return <article key={url} className={`${theme==='light' ? styles.projectarticle_light : styles.projectarticle_dark}`}>
                        <div className={styles.projecthead}>{name}</div>
                        <div className={styles.projectdescr}>{description}</div>
                        <div className={styles.projectdate}>{date.getDate()} - {months[date.getMonth()]} - {date.getFullYear()}</div>
                        <div className={styles.projectlinks}>
                            <a href={url} target='_blank' rel='noreferrer' className={`${theme==='light' ? styles.projectlive_light : styles.projectlive_dark}`}>demo</a>
                            <a href={source} target='_blank' rel='noreferrer' className={`${theme==='light' ? styles.projectcode_light : styles.projectcode_dark}`}>code</a>
                        </div>
                        
                    </article> 

                })
            }
        </section>
        </>
    )
}

export default Project