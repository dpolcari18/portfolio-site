import React from 'react'

// component
import Image from '../components/Image'

// headshot
import headshot from '../images/david-square-headshot.png'

const Contact = () => {

    return (
        <div id='contact_id' className='view'>
            <Image src={headshot} alt='Second headshot of David' id='contact_image' />
            <table>
                <thead>
                    <tr>
                        <td>
                            Contact Information
                        </td>
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