import React from 'react';
import Component from './Component';

class Subtitle extends Component {
    render(){
        return(
            <span className={"subtitle " + this.getClassName(this.props)}>{this.props.children}</span>
        )
    }
}

export default Subtitle;