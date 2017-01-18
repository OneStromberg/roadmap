import React from 'react';

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
                {this.props.children}
            </button>
        );
    }
};
export default Button;