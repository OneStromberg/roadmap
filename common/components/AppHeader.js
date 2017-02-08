import React from 'react';
import Component from './Component';
import Header from './Header';

class AppHeader extends Component {
    render(){
        return(
            <Header>
                {this.props.children}          
            </Header>
        )
    }
}

export default AppHeader;