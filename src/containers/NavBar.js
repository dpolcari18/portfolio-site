import React, { useState, useEffect } from 'react'

const NavBar = () => {

    // local state
    const [active, setActive] = useState('home_id')
    
    // observe elements
    const observeEle = ['home_id', 'about_id', 'portfolio_id', 'blog_id', 'contact_id', 'skills_id']

    const handleClick = (e) => {
        debugger
        setActive(e.target.innerText)
        document.getElementById(`${e.target.innerText.toLowerCase()}_id`).scrollIntoView({behavior: 'smooth'})
    }

    const handleObserve = (el) => {
        setActive(el[0].target.id)
    }

    useEffect (() => {
        const options = {
            root: null,
            threshold: 0.6
        }

        const observer = new IntersectionObserver((el) => handleObserve(el), options)

        observeEle.forEach(element => observer.observe(document.getElementById(`${element}`)))

        return (() => {
            observeEle.forEach(element => observer.unobserve(document.getElementById(`${element}`)))
        })
    }, [])

    return (
        <nav id='menu'>
            <ul>
                <li><a href='#home_id'>Home</a></li>
                <li><a href='#about_id'>About</a></li>
                <li><a href='#skills_id'>Skills</a></li>
                <li><a href='#portfolio_id'>Portfolio</a></li>
                <li><a href='#blog_id'>Blog</a></li>
                <li><a href='#contact_id'>Contact</a></li>
            </ul>    
        </nav>
        
    )
}

export default NavBar