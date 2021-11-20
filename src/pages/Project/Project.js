import React, {useEffect} from 'react'
import styles from './Project.module.css'
import {projects, months} from './projectdata'

const Project = () => {

    useEffect(() => {
        document.title = 'Projects | VinayKumar'
    },[])

    return (
        <section className={styles.gridsection}>
            {
                projects.map(project => {
                    const { name, description, date, url, source } = project
                    return <article key={url} className={styles.projectarticle}>
                        <div className={styles.projecthead}>{name}</div>
                        <div className={styles.projectdescr}>{description}</div>
                        <div className={styles.projectdate}>{date.getDate()} - {months[date.getMonth()]} - {date.getFullYear()}</div>
                        <div className={styles.projectlinks}>
                            <a href={url} target='_blank' rel='noreferrer' className={styles.projectlive}>live</a>
                            <a href={source} target='_blank' rel='noreferrer' className={styles.projectcode}>code</a>
                        </div>
                        
                    </article> 

                })
            }
            
            
        </section>
    )
}

export default Project