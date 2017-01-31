import React from 'react';
import Component from './Component';
import Label from './Label';

class Header extends Component {
    render(){
        return(
            <header {...this.props} className={"header " + this.getClassName(this.props)} />
        )
    }
}

export default Header;