import React, { useEffect, useState } from 'react'
import blogs from './blogdata'
import {months} from '../Project/projectdata'
import styles from './Blog.module.css'

const Blog = ({match}) => {
    const [blog, setBlog] = useState({})
    
    useEffect(() => {
        const currentblog = blogs.find(item => item.url === match.params.url)  
        setBlog({...currentblog})
    },[match.params.url])

    return (
        <section className={styles.blog_section}>
            <article className={styles.blog_article}>
                <header className={styles.blog_title}>{blog.title}</header>
                {
                    blog.date &&  
                    <p className={styles.blog_date}>{blog.date.getFullYear()}-{months[blog.date.getMonth()]}-{blog.date.getDate()}</p>
                }
                {
                    blog.text &&
                    blog.text.map((item, index) => 
                        <p key={index} className={styles.blog_text}>{item}</p>
                    )
                }
            </article>
        </section>
    )
}

export default Blog