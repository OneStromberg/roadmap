import React from 'react';
import Component from './Component';

class Link extends Component {
    render(){
        return(
            <a {...this.props} className={"uk-link " + this.getClassName(this.props)}>{this.props.children}</a>
        )
    }
}

export default Link;