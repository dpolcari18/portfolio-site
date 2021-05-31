import React, { useEffect } from 'react'

// components
import BlogPost from '../components/BlogPost'

// fetch blog posts
import { getFetchCall } from '../functions/Functions'

// endpoint for medium blog
const URL = 'https://medium.com/feed/@davidpolcari'

const Blog = () => {

    // fetch blog posts
    useEffect(() => {
        const blogsRes = getFetchCall(URL)
    }, [])

    return (
        <div className='view' id='blog_id'>
            <BlogPost />
        </div>
    )
}

export default Blog