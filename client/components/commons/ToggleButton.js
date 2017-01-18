import React from 'react';
import Label from './Label.js';
import Button from './Button.js';
import uuid from 'uuid';

class ToggleButton extends React.Component {
    constructor(props){
        super(props);
        this.id = uuid();
    }
    _getButtonClassName(){
        return "checkbox-wrap " +
            (this.props.className ? this.props.className : "") +
            (this.props.disabled ? " btn-disabled" : "");
    }
    getButtonChecked(){
        return this.props.hasOwnProperty('checked') && this.props.checked;
    }
    render() {
        return (
            <div className={this._getButtonClassName()} >
                <input onChange={data => null} checked={this.getButtonChecked()} onClick={this.props.onClick} type="checkbox" className="checkbox" id={"checkbox" + this.id} />
                <label htmlFor={"checkbox" + this.id}>{this.props.label}</label>
            </div>
        );
    }
};
export default ToggleButton;