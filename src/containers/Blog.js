import React, { useState, useEffect } from 'react'

// components
import BlogPost from '../components/BlogPost'

// endpoints
const URL = 'https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40davidpolcari'

const Blog = () => {

    // local state
    const [blogs, setBlogs] = useState([])

    // fetch blogs from medium
    const fetchBlogs = async () => {
        const fetchReq = await fetch(URL)
        const fetchRes = await fetchReq.json()
        
        setBlogs(fetchRes.items)
    }
    
    
    // call fetch function
    useEffect(() => {
        fetchBlogs()
    }, [])

    return (
        <div id='blog_id' className='view'>
            <section className='cards-wrapper'>
                {blogs.map(blog => <BlogPost key={blog.pubDate} blog={blog} />)}
            </section>
        </div>
    )
}

export default Blog