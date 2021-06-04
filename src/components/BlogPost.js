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
        <div className='card-grid-space'>
            <a href={blog.link} title={`Click to read ${blog.title}!`} target='_blank' rel='noreferrer' className='card' style={{backgroundImage: `url(${blog.thumbnail})`}}>
                <div>
                    <h1>{blog.title}</h1>
                    <div className='date'>{convertDate()}</div>
                    <div className='tags'>
                        {blog.categories.map(tag => <div className='tag'>{tag}</div>)}                    
                    </div>
                </div>
            </a>
        </div>
    )
}

export default BlogPost