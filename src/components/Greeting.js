import React from 'react'

// react-semantic
import { Container, Grid } from 'semantic-ui-react'

const Greeting = () => {
    return (
        <Container className='view' id='home_id' text='true'>
            <Grid>
                <Grid.Row columns={1} textAlign='center'>
                    <Grid.Column>                    
                        <h1>David Polcari</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} textAlign='center'>
                    <Grid.Column>
                        <h1>Full-Stack</h1>
                    </Grid.Column>
                </Grid.Row>
                <Grid.Row columns={1} textAlign='center'>
                    <Grid.Column>
                        <h1>Software Engineer</h1>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Container>
    )
}

export default Greeting