import React from 'react'
import { Link } from 'react-router-dom'
import blogs from './blogdata'
import {months} from '../Project/projectdata'
import styles from './BlogList.module.css'

const BlogList = () => {
    return (
        <section className={styles.bloglist_section}>

            {
                blogs.map(blog => {
                    return <article className={styles.bloglist_article} key={blog.id}>
                            <h4 className={styles.bloglist_title}>{blog.title}</h4>
                            <span className={styles.bloglist_date}>
                                {blog.date.getFullYear()}-{months[blog.date.getMonth()]}-{blog.date.getDate()}
                            </span><br/>
                            <p className={styles.bloglist_text}>
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