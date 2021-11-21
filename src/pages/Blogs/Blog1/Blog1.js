import React, { useEffect, useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import {ThemeContext} from '../../../context'
import styles from './Blog1.module.css'
import markdown1 from './markdown'

const Blog1 = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'Factory Functions | Blogs'
    },[])

   return (
       <section className={`${theme==='light' ? styles.blog_section_light : styles.blog_section_dark}`}>
           <article className={`${theme==='light' ? styles.blog_article_light : styles.blog_article_dark}`}>
            <ReactMarkdown>{markdown1}</ReactMarkdown>
           </article>
       </section>
   )
}

export default Blog1