import React, {useEffect} from 'react'
import { Link } from 'react-router-dom'
import blogs_list from './listing_page_data'
import { months } from '../Project/projectdata'
import styles from './BlogList.module.css'

const BlogList = () => {

    useEffect(() => {
        document.title = 'Blogs | VinayKumar'
    },[])

    return (
        <section className={styles.bloglist_section}>

            {
                blogs_list.map(blog => {
                    return <article className={styles.bloglist_article} key={blog.id}>
                            <h4 className={styles.bloglist_title}>
                            <Link to={`/blogs/${blog.url}`}>
                                {blog.title}
                            </Link>
                            </h4>
                            <span className={styles.bloglist_date}>
                                {blog.date.getFullYear()}-{months[blog.date.getMonth()]}-{blog.date.getDate()}
                            </span><br/>
                            <p className={styles.bloglist_text}>
                                {blog.description.slice(0,50)} . . . .
                                <Link to={`/blogs/${blog.url}`} style={{'margin-left': '10px'}}>
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