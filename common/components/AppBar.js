import React from 'react';
import Component from './Component';
import Header from './Header';

class AppBar extends Component {
    render(){
        return(
            <Header className={this.getClassName(this.props)}>
                {this.props.children}       
            </Header>
        )
    }
}

export default AppBar;