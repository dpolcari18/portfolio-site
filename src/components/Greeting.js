import React from 'react'

// react-semantic
import { Grid } from 'semantic-ui-react'

const Greeting = () => {
    return (
            <Grid className='view align_view' id='home_id'>
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
    )
}

export default Greeting