import React, { useState, useEffect } from 'react'

const NavBar = () => {

    // local state
    // const [active, setActive] = useState('home_id')
    
    // observe elements
    // const observeEle = ['home_id', 'about_id', 'portfolio_id', 'blog_id', 'contact_id', 'skills_id']

    // set active element on click
    const handleClick = (e) => {
        document.getElementById(`${e.target.innerText.toLowerCase()}_id`).scrollIntoView({behavior: 'smooth'})
    }

    // sets active link when listener triggers
    // const handleObserve = (el) => {
    //     setActive(el[0].target.id)
    // }

    // // listens for scroll event to set active link
    // useEffect (() => {
    //     const options = {
    //         root: null,
    //         threshold: 0.8
    //     }

    //     const observer = new IntersectionObserver((el) => handleObserve(el), options)

    //     observeEle.forEach(element => observer.observe(document.getElementById(`${element}`)))

    //     return (() => {
    //         observeEle.forEach(element => observer.unobserve(document.getElementById(`${element}`)))
    //     })
    // }, [])

    return (
        <nav id='menu'>
            <ul>
                <li><div onClick={(e) => handleClick(e, 'home_id')}>Home</div></li>
                <li><div onClick={(e) => handleClick(e, 'about_id')}>About</div></li>
                <li><div onClick={(e) => handleClick(e, 'skills_id')}>Skills</div></li>
                <li><div onClick={(e) => handleClick(e, 'portfolio_id')}>Portfolio</div></li>
                <li><div onClick={(e) => handleClick(e, 'blog_id')}>Blog</div></li>
                <li><div onClick={(e) => handleClick(e, 'contact_id')}>Contact</div></li>
            </ul>    
        </nav>
        
    )
}

export default NavBar