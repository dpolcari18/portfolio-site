import React, {useState} from 'react'

// react-semantic
import { Form, Grid } from 'semantic-ui-react'

// component
import Image from '../components/Image'

// headshot
import headshot from '../images/david-square-headshot.png'

const Contact = () => {

    // local state
    const [email, setEmail] = useState('')
    const [subject, setSubject] = useState('')
    const [body, setBody] = useState('')

    return (
        <div id='contact_id'>
            <Image src={headshot} alt='Second headshot of David' id='contact_image' />
            <table>
                <thead>
                    <tr>
                        Contact Information
                    </tr>
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
        </div>
    )
}

export default Contact