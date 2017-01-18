import React from 'react';

class Label extends React.Component {
    _getButtonClassName(){
        return "control-label " +
            (this.props.className ? this.props.className : "") +
            (this.props.hasOwnProperty('center') ? " center-text" : "") +
            (this.props.hasOwnProperty('disabled') ? " control-disabled" : "") +
            (this.props.hasOwnProperty('uppercase') ? " uppercase-text" : "") +
            (this.props.hasOwnProperty('pullRight') ? " pull-right" : "") +
            (this.props.hasOwnProperty('pullLeft') ? " pull-left" : "")
    }
    _getFor(){
        return this.props.htmlFor ? this.props.htmlFor : "";
    }
    render() {
        return (
            <label htmlFor={this._getFor()} className={this._getButtonClassName()}>{this.props.children}</label>
        );
    }
};
export default Label;