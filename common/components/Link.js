import React from 'react';
import Component from './Component';

class Link extends Component {
    render(){
        return(
            <a {...this.props} href="#" className={"uk-link " + this.getClassName(this.props)} />
        )
    }
}

export default Link;