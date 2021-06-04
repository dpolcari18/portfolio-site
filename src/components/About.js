import React from 'react'

// component
import Image from './Image'

// headshot
import headshot from '../images/david-headshot.png'

const About = () => {
    return (
        <div id='about_id' className='view'>
            <p>My name is David Polcari and I am a full-stack software engineer in Austin, Texas with a background in oil and gas and real estate lending. I am a self proclaimed efficiency enthusiast and love iteratively improving everything I do whether it's chores at home or projects at work. Self driven, entrepreneur, whose hobbies include watching sports, mountain biking and growing ridiculously hot peppers.</p> 
            <Image src={headshot} alt='Professional head shot of David' id='headshot'/>
        
            <em id='quote'>"Life is like riding a bicycle. To keep your balance you must keep moving." - Albert Einstein</em>
        </div>
                
    )
}

export default About