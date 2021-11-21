import React, { useEffect, useContext } from 'react'
import ReactMarkdown from 'react-markdown'
import {ThemeContext} from '../../../context'
import styles from '../Blog1/Blog1.module.css'
import markdown2 from './markdown'

const Blog2 = () => {
    const {theme} = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'Prototypal Inheritance | Blogs'
    },[]) 

   return (
    <section className={`${theme==='light' ? styles.blog_section_light : styles.blog_section_dark}`}>
    <article className={`${theme==='light' ? styles.blog_article_light : styles.blog_article_dark}`}>
     <ReactMarkdown>{markdown2}</ReactMarkdown>
    </article>
</section>
   )
}

export default Blog2