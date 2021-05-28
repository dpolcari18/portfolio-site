import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

// semantic ui
import { Menu } from 'semantic-ui-react'

const NavBar = () => {

    const history = useHistory()

    const [active, setActive] = useState('Home')

    const handleClick = (e) => {
        setActive(e.target.innerText)
        e.target.innerText === 'Home' ? history.push('/') :     history.push(`/${e.target.innerText.toLowerCase()}`)
    }

    return (
        <Menu secondary fixed='top' id='menu'>
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