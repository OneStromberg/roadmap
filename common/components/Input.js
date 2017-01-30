import React from 'react';
import Component from './Component';

class Input extends Component {
    render(){
        return (
            <input {...this.props} className={"uk-input " + this.getClassName(this.props)} placeholder={this.props.placeholder} />
        )
    }
}

export default Input;