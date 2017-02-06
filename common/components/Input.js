import React from 'react';
import Component from './Component';

class Input extends Component {
    render(){
        return (
            <input
            type={this.props.type ? this.props.type : ""} 
            className={"uk-input " + this.getClassName(this.props)} 
            placeholder={this.props.placeholder ? this.props.placeholder : ""} />
        )
    }
}

export default Input;