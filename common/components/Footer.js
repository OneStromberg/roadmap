import React from 'react';
import Component from './Component';
import View from './View';

class Footer extends Component {
    render(){
        return (
            <footer {...this.props} className={"footer " + this.getClassName(this.props)}>
            </footer>
        )
    }
}

export default Footer;