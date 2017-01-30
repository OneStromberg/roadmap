import React from 'react';
import Component from './Component';
import Text from './Text';

class Label extends Component {
    render(){
        return(
            <Text {...this.props} className={"uk-label " + this.getClassName(this.props)}/>
        )
    }
}

export default Label;