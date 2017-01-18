import React from 'react';

import { Navbar } from 'react-bootstrap';

class AppBarLogoWrap extends React.Component {
    render(){
        return(
            <Navbar.Header>
                {this.props.children}
            </Navbar.Header>
        )
    }
}

export default AppBarLogoWrap;