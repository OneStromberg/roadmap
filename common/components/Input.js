import React from 'react';
import Component from './Component';

class Input extends Component {
    getClassName(props){
        var newProps = "";
        newProps += props.className + ' ' ;
        newProps += (props.hasOwnProperty('empty') && props.empty !== false) ? "input-empty " : "";
        newProps += (props.hasOwnProperty('selected') && props.empty !== false) ? "input-selected " : "";
        newProps += (props.hasOwnProperty('typing') && props.empty !== false) ? "input-typing " : "";
        return newProps
    }
    render(){
        return (
            <label>
                <input
                    type={this.props.type ? this.props.type : ""} 
                    className={"uk-input " + this.getClassName(this.props)} 
                    placeholder={this.props.placeholder ? this.props.placeholder : ""} 
                    defaultValue={this.props.value ? this.props.value : ""}
                    disabled={this.props.disabled ? this.props.disabled : null}
                    onChange={(e) => this.props.onChange(e)}/>
                    {this.props.children}
            </label>
        )
    }
}

export default Input;