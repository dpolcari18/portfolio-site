import React from 'react'

// containers
import About from '../components/About'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Resume from './Resume'

// components
import Greeting from '../components/Greeting'

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