import React from 'react';
import { Component, Label, ButtonLink } from 'components';
import Input from './Input';

class InputPassword extends Component {
    getClassName(props){
        var newProps = "";
        newProps += (props.hasOwnProperty('error') && props.empty !== false) ? "input-error " : "input-empty ";
        newProps += (props.hasOwnProperty('focused') && props.empty !== false) ? "focused" : "";
        return newProps;
    }
    render() {
        return (
            <Label className="forms-label"> 
                <Input className={this.getClassName(this.props)} type="password" placeholder="password" /> 
                <ButtonLink className="restore-button">Restore?</ButtonLink>
            </Label>
        );
    }
}

export default InputPassword;