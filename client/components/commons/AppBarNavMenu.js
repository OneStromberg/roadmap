import React from 'react';

import { Navbar, Nav, NavItem } from 'react-bootstrap';

class AppBarNavMenu extends React.Component {
    _getClassName(){
        return (this.props.className ? this.props.className : "");
    }
    render(){
        return(
            <Nav className={this._getClassName()}>
                {this.props.children}
            </Nav>
        );
    }
}

class AppBarNavMenuItem extends React.Component {
    render(){
        return(
            <NavItem>
                {this.props.children}
            </NavItem>     
        );
    }
}

export { AppBarNavMenuItem };
export default AppBarNavMenu;