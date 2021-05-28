import React from 'react'

// containers
import Greeting from './Greeting'
import About from './About'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Resume from './Resume'

const Home = () => {
    return (
        <div id='main'>
            <Greeting />
            <About />
            <Portfolio />
            <Blog />
            <Contact />
            <Resume />
        </div>
    )
}

export default Home