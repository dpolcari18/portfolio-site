import React from 'react'

const BlogPost = ({ blog }) => {

    const convertDate = () => {
        let date = blog.pubDate.slice(0, 10)
        const month = date.slice(5, 7)
        const day = date.slice(8, 10)
        const year = date.slice(0, 4)
        
        date = `${month}.${day}.${year}`
        
        return date
    }

    return (
        <a href={blog.link} target='_blank' className='blog-card' style={{backgroundImage: `url(${blog.thumbnail})`}} >
            <div>
                <h1>{blog.title}</h1>
                <div className='date'>{convertDate()}</div>
            </div>
            <img src={blog.thumbnail} alt='blog post thumbnail'/>
            {blog.pubDate}
        </a>
    )
}

export default BlogPost