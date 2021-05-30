import React from 'react'

// react semantic
import { Item } from 'semantic-ui-react'

import Logo from '../images/square_logo.png'

const Portfolio = () => {
    return (
        <div className='view' id='portfolio_id'>
            <Item>
                <Item.Image size='large' src={Logo} />
                <Item.Content>
                    <Item.Header><h2>weDrive</h2></Item.Header>
                    <Item.Meta>
                        <span className='price'>$1200</span>
                        <span className='stay'>1 Month</span>
                    </Item.Meta>
                    <Item.Description>weDrive is a journey management application aimed at reducing the risks associated with driving.</Item.Description>
                </Item.Content>
            </Item>
        </div>
    )
}

export default Portfolio