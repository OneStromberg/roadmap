import React from 'react';
import Component from './Component';

class Text extends Component {
    render(){
        return(
            <span className={"uk-text-bold" + this.getClassName(this.props)}>{this.props.children}</span>
        )
    }
}

export default Text;