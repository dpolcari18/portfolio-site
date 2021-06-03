import React from 'react'

// semantic ui
import { Menu, Icon } from 'semantic-ui-react'

const Footer = () => {
    return (
        <Menu fixed='bottom' id='footer'>
            <a href='https://www.linkedin.com/in/david-polcari/' rel='noreferrer' target='_blank'><Icon name='linkedin' size='huge'/></a>
            <a href='https://github.com/dpolcari18' rel='noreferrer' target='_blank'><Icon name='github square' size='huge'/></a>
            <a href='https://davidpolcari.medium.com/' rel='noreferrer' target='_blank'><Icon name='medium' size='huge' /></a>
            <a href='mailto:dpolcari18@gmail.com'><Icon name='mail square' size='huge' /></a>
        </Menu>
    )
}

export default Footer