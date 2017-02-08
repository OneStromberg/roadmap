import React from 'react';
import Component from './Component';

class Header extends Component {
    render(){
        return(
            <header {...this.props} className={this.getClassName(this.props) + " header"} />
        )
    }
}

export default Header;