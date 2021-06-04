import React from 'react'

// containers
import About from '../components/About'
import Portfolio from './Portfolio'
import Blog from './Blog'
import Contact from './Contact'
import Skills from './Skills'

// components
import Greeting from '../components/Greeting'

const Home = () => {
    return (
        <div id='main'>
            <Greeting />
            <About />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    )
}

export default Home