import React, { useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Blog2.module.css'
import markdown2 from './markdown'

const Blog2 = () => {

    useEffect(() => {
        document.title = 'Prototypal Inheritance | Blogs'
    },[]) 

   return (
       <section className={styles.blog_section}>
           <article className={styles.blog_article}>
            <ReactMarkdown>{markdown2}</ReactMarkdown>
           </article>
       </section>
   )
}

export default Blog2