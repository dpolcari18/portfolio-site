import React from 'react'

// component
import Image from './Image'

// react-semantic
import { Grid } from 'semantic-ui-react'

import headshot from '../images/david-headshot.png'

const About = () => {
    return (
        <Grid className='view align_view' id='about_id'>
            <Grid.Row columns={2} textAlign='center'>
                <Grid.Column id='about_text' width='6'>
                    My name is David Polcari and I am a full-stack software engineer in Austin, Texas with a background in oil and gas and real estate lending. I am a self proclaimed efficiency enthusiast and love iteratively improving everything I do whether it's chores at home or projects at work. Self driven, entrepreneur, whose hobbies include watching sports, mountain biking and growing ridiculously hot peppers. 
                </Grid.Column>
                <Grid.Column width='6'>
                    <Image src={headshot} alt='Professional head shot of David' id='headshot'/>
                </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={1} textAlign='center'>
                <Grid.Column>
                    <em id='quote'>"Life is like riding a bicycle. To keep your balance you must keep moving." - Albert Einstein</em>
                </Grid.Column>
            </Grid.Row>
        </Grid>
    )
}

export default About