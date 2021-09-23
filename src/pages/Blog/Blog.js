import React, { useEffect, useState } from 'react'
import blogs from './blogdata'

const Blog = ({match}) => {
    const [blog, setBlog] = useState({})

    useEffect(() => {
        const currentblog = blogs.find(item => item.url === match.params.url)  
        setBlog({...currentblog})
    },[match.params.url])

    return (
        <article>
            <header>{blog.title}</header>
            <p>{blog.text}</p>
        </article>
    )
}

export default Blog