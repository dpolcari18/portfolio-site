import React, { useState, useEffect } from 'react'

// semantic ui
import { Menu } from 'semantic-ui-react'

const NavBar = () => {

    // local state
    const [active, setActive] = useState('home_id')
    
    // observe elements
    const observeEle = ['home_id', 'about_id', 'portfolio_id', 'blog_id', 'contact_id', 'resume_id']

    const handleClick = (e) => {
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
        <Menu fixed='top' id='menu'>
            <Menu.Item 
                name='Home'
                active={active === 'home_id'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='About'
                active={active === 'about_id'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Portfolio'
                active={active === 'portfolio_id'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Blog'
                active={active === 'blog_id'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Contact'
                active={active === 'contact_id'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Resume'
                active={active === 'resume_id'}
                onClick={(e) => handleClick(e)}
            />
        </Menu>
    )
}

export default NavBar