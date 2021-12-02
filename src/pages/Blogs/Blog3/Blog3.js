import React, {useEffect, useContext} from 'react'
import { Helmet } from 'react-helmet'
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
           <Helmet>
                <meta property="og:image" content="https://raw.githubusercontent.com/foolhardy21/markfour-neogcamp/main/src/pages/Blogs/assets/blogs_og.png" />
                <meta property="og:title" content="Portfolio Update" />
                <meta property="og:description" content="This blog is about all the things I learnt while updating my portfolio site and most of it has to do with client side rendering." />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:site" content="@foolhardy_vinay" />
                <meta name="twitter:title" content="Portfolio Update" />
                <meta name="twitter:description" content="This blog is about all the things I learnt while updating my portfolio site and most of it has to do with client side rendering." />
                <meta name="twitter:image" content="https://raw.githubusercontent.com/foolhardy21/markfour-neogcamp/main/src/pages/Blogs/assets/blogs_og.png" />        
           </Helmet>
           <article className={`${theme==='light' ? styles.blog_article_light : styles.blog_article_dark}`}>
            <ReactMarkdown>
                {markdown3}
            </ReactMarkdown>
           </article>
       </section>
   )
}

export default Blog3
