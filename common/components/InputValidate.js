import React from 'react';
import Component from './Component';
import Input from './Input';

class InputValidate extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: null,
            validType: null
        }
    }
    onValidate(e){
        let validType = null;
        let valid = null;
        if(typeof this.props.validate === 'function'){
            valid = this.props.validate(e.target.value);
            validType = valid ? this.props.successMessage : this.props.errorMessage;
        }      
        this.setState({
            status: valid,
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