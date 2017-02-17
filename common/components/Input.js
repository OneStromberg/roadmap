import React from 'react';
import Component from './Component';

class Input extends Component {
    render(){
        return (
                <input
                type={this.props.type ? this.props.type : ""} 
                className={"uk-input " + this.getClassName(this.props)} 
                placeholder={this.props.placeholder ? this.props.placeholder : ""} 
                defaultValue={this.props.value ? this.props.value : ""}
                disabled={this.props.disabled ? this.props.disabled : null}
                />
        )
    }
}

export default Input;