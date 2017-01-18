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

class Form_1 extends React.Component {
    render() {
        return(
            <FormWrap className="frm-1">
                {this.props.children}
            </FormWrap>
        );
    }
}

export { Form_1 };
export default FormWrap;