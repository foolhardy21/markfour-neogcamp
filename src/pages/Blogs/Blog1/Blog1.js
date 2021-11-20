import React from 'react'
import ReactMarkdown from 'react-markdown'
import styles from './Blog1.module.css'
import markdown1 from './markdown'

const Blog1 = () => {
   return (
       <section className={styles.blog_section}>
           <article className={styles.blog_article}>
            <ReactMarkdown>{markdown1}</ReactMarkdown>
           </article>
       </section>
   )
}

export default Blog1