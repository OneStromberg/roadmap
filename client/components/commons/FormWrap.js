import React from 'react';

class FormWrap extends React.Component {
    _onClick(){
        this.props.onClick ? this.props.onClick() : null;
    }
    _getClassName(){
        return "form-wrap " +
            (this.props.className ? this.props.className : "");
    }
    render() {
        return (
            <div className={this._getClassName()} onClick={this._onClick.bind(this)}>
                    {this.props.children}
            </div>
        );
    }
};

export default FormWrap;