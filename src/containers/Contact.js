import React, {useState} from 'react'

// react-semantic
import { Form, Grid, Image } from 'semantic-ui-react'

// headshot
import headshot from '../images/david-square-headshot.png'

const Contact = () => {

    // local state
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    return (
        <Grid className='view align_view' id='contact_id'>
            <Grid.Row>
                <Grid.Column width='5'>
                    <Image src={headshot} alt='Second headshot of David' id='contact_image' />
                    <table>
                        <thead>
                            <th>
                                Contact Information
                            </th>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    David Polcari
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    dpolcari18@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    LinkedIn
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    GitHub
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    Medium
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </Grid.Column>
                <Grid.Column width='5'>            
                    <Form widths='equal'>
                        <Form.Input fluid 
                                    label='Email' 
                                    placeholder='Your Email Here' 
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}/>
                        <Form.Input fluid 
                                    label='Subject' 
                                    placeholder='Subject Line' 
                                    value={subject}
                                    onChange={(e) => setSubject(e.target.value)}/>
                        <Form.TextArea fluid 
                                       label='Body' 
                                       placeholder='What do you want to say?' 
                                       value={body}
                                       onChange={(e) => setBody(e.target.value)}/>
                        <Form.Button>Send</Form.Button>
                    </Form>
                </Grid.Column>        
            </Grid.Row>
        </Grid>
    )
}

export default Contact