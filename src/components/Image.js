import React from 'react'

const Image = ({ src, alt, id }) => {
    return (
        <img src={src} alt={alt} id={id} className='responsive_image'/>
    )
}

export default Image