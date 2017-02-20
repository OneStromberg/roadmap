import React from 'react';
import Component from './Component';
import Input from './Input';

class InputValidate extends Component {
    constructor(props){
        super(props);
        this.state = {
            validType: props.state
        }
    }
    getClassName(props){
        var newProps = "";
        //newProps += !props.className ? props.className + ' ' : '' ;
        newProps += (props.hasOwnProperty('success') && props.success !== false) ? "uk-form-success " : "";
        newProps += (props.hasOwnProperty('error') && props.error !== false) ? "uk-form-danger " : "";
        return newProps
    }
    onValidate(e){
        let validType = null;
        let valid = null;
        if(typeof this.props.validate === 'function'){
            validType = this.props.validate(e.target.value, this.props.state);
        }      
        this.setState({
            validType: validType
        })     
    }
    render(){
        return (
            <div className="input-validator">
                <input
                type={this.props.type ? this.props.type : ""} 
                className={"uk-input " + this.getClassName(this.props)} 
                placeholder={this.props.placeholder ? this.props.placeholder : ""} 
                disabled={this.props.disabled ? this.props.disabled : null}
                onChange={(e) => this.onValidate(e)}
                />
                <div>{this.state.validType}</div>
            </div>
        )
    }
}

export default InputValidate;