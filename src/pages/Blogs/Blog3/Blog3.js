import React, {useEffect, useContext} from 'react'
import ReactMarkdown from 'react-markdown'
import { ThemeContext } from '../../../context'
import styles from './Blog3.module.css'
import markdown3 from './markdown'

const Blog3 = () => {
    const {theme} = useContext(ThemeContext)
    
    useEffect(() => {
        document.title = 'Portfolio Update | Blogs'
    },[])

   return (
       <section className={`${theme==='light' ? styles.blog_section_light : styles.blog_section_dark}`}>
           <article className={`${theme==='light' ? styles.blog_article_light : styles.blog_article_dark}`}>
            <ReactMarkdown>
                {markdown3}
            </ReactMarkdown>
           </article>
       </section>
   )
}

export default Blog3
