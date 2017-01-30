import React from 'react';
import Component from './Component';

class Label extends Component {
    render(){
        return(
            <span {...this.props} className={"uk-label " + this.getClassName(this.props)}/>
        )
    }
}

export default Label;