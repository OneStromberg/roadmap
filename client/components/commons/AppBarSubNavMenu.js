import React from 'react';

import {Nav} from 'react-bootstrap'

class AppBarSubNavMenu extends React.Component{
    render(){
        return(
            <Nav className="sub-nav">
                {this.props.children}
            </Nav>
        )
    }
}

export default AppBarSubNavMenu;