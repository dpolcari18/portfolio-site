import React from 'react'

import headshot from '../images/david-headshot.png'

const About = () => {
    return (
        <div className='view'>
            <div>
                My name is David Polcari and I am a full-stack software engineer in Austin, Texas with a background in oil and gas and real estate lending. I am a self proclaimed efficiency enthusiast and love iteratively improving everything I do whether it's chores at home or projects at work. In my free time I enjoy watching sports, mountain biking and growing ridiculously hot peppers. 
            </div>
            <div>
                <img src={headshot} alt='Professional head shot of David' id='headshot'/>
            </div>
            <div>
                "Life is like riding a bicycle. To keep your balance you must keep moving." - Albert Einstein
            </div>
        </div>
    )
}

export default About