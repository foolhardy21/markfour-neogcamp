import React, { useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { months } from '../Project/projectdata'
import { ThemeContext } from '../../context'
import blogs_list from './listing_page_data'
import styles from './BlogList.module.css'

const BlogList = () => {
    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        document.title = 'Blogs | VinayKumar'
    }, [])

    return (
        <section className={`${theme === 'light' ? styles.bloglist_section_light : styles.bloglist_section_dark}`}>

            {
                blogs_list.map(blog => {
                    return <article className={`${theme === 'light' ? styles.bloglist_article_light : styles.bloglist_article_dark}`} key={blog.id}>
                        {
                            blog.id >= 3
                                ? <a href={blog.url} target='_blank' rel='noreferrer' className={`${theme === 'light' ? styles.bloglist_title_light : styles.bloglist_title_dark}`}>{blog.title}</a>
                                :
                                <Link className={`${theme === 'light' ? styles.bloglist_title_light : styles.bloglist_title_dark}`} to={`/blogs/${blog.url}`}>
                                    {blog.title}
                                </Link>
                        }
                        <br />
                        <span className={styles.bloglist_date}>
                            {blog.date.getFullYear()}-{months[blog.date.getMonth()]}-{blog.date.getDate()}
                        </span><br />
                        <p className={styles.bloglist_text}>
                            {blog.description.slice(0, 50)} . . . .
                            {
                                blog.id >= 3
                                    ? <a href={blog.url} target='_blank' rel='noreferrer' className={`${theme === 'light' ? styles.readmore_light : styles.readmore_dark}`}>Read More</a>
                                    :
                                    <Link to={`/blogs/${blog.url}`} className={`${theme === 'light' ? styles.readmore_light : styles.readmore_dark}`}>
                                        Read More
                                    </Link>
                            }
                        </p>
                    </article>
                })
            }
        </section>
    )
}

export default BlogList