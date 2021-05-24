import React from 'react'

import NavBar from './NavBar'
import About from './About'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Resume from './Resume'

const Home = () => {
    return (
        <div id='home'>
            <NavBar />
            <About />
            <Portfolio />
            <Blog />
            <Contact />
            <Resume />
        </div>
    )
}

export default Home