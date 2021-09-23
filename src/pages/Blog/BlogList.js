import React from 'react'
import { Link } from 'react-router-dom'
import blogs from './blogdata'
import {months} from '../Project/projectdata'
import styles from './BlogList.module.css'

const BlogList = () => {
    return (
        <section className={styles.blog_section}>

            {
                blogs.map(blog => {
                    return <article className={styles.blog_article} key={blog.id}>
                            <h4 className={styles.blog_title}>{blog.title}</h4>
                            <span className={styles.blog_date}>
                                {blog.date.getFullYear()}-{months[blog.date.getMonth()]}-{blog.date.getDate()}
                            </span><br/>
                            <p className={styles.blog_text}>
                                {blog.text.slice(0,50)}. . . .
                                <Link to={`/blogs/${blog.url}`}>
                                    Read More
                                </Link>
                            </p>
                    </article>
                })
            }
        </section>
    )
}

export default BlogList