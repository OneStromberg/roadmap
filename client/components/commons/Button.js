import React from 'react';
import Label from './Label.js';

class Button extends React.Component {
    _onClick(){
        this.props.onClick ? this.props.onClick() : null;
    }
    _getButtonClassName(){
        return "btn-default " +
            (this.props.className ? this.props.className : "") +
            (this.props.disabled ? " btn-disabled" : "");
    }
    render() {
        return (
            <button className={this._getButtonClassName()} onClick={this._onClick.bind(this)}>
                <Label>{this.props.children}</Label>
            </button>
        );
    }
};
export default Button;