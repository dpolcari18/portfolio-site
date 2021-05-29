import React from 'react'

// semantic ui
import { Menu, Icon } from 'semantic-ui-react'

const Footer = () => {
    return (
        <Menu secondary fixed='bottom'>
            <Icon name='github square' size='huge'/>
            <Icon name='linkedin' size='huge'/>
            <Icon name='medium' size='huge' />
            <Icon name='mail' size='huge' />
        </Menu>
    )
}

export default Footer