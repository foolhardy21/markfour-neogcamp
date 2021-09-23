import React, { useEffect, useState } from 'react'
import blogs from './blogdata'
import {months} from '../Project/projectdata'
import styles from './Blog.module.css'

const Blog = ({match}) => {
    const [blog, setBlog] = useState({})
    console.log(blog)
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
                <p className={styles.blog_text}>{blog.text}</p>
            </article>
        </section>
    )
}

export default Blog