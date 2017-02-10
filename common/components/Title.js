import React from 'react';
import Component from './Component';

class Title extends Component {
    render(){
        return(
            <span className={"title " + this.getClassName(this.props)}>{this.props.children}</span>
        )
    }
}

export default Title;