import React, { useState } from 'react'

// semantic ui
import { Menu } from 'semantic-ui-react'

const NavBar = () => {

    const [active, setActive] = useState('Home')

    const handleClick = (e) => {
        setActive(e.target.innerText)
    }

    return (
        <Menu secondary>
            <Menu.Item 
                name='Home'
                active={active === 'Home'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='About'
                active={active === 'About'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Portfolio'
                active={active === 'Portfolio'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Blog'
                active={active === 'Blog'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Contact'
                active={active === 'Contact'}
                onClick={(e) => handleClick(e)}
            />
            <Menu.Item 
                name='Resume'
                active={active === 'Resume'}
                onClick={(e) => handleClick(e)}
            />
        </Menu>
    )
}

export default NavBar