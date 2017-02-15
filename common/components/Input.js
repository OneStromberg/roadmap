import React from 'react';
import Component from './Component';

class Input extends Component {
    constructor(props){
        super(props);
        this.state = {
            status: null,
            validateType: validateType
        }
    }
    onValidate(e){
        let errorText = null;
        let valid = null;
        if(typeof this.props.validate === 'function'){
            valid = this.props.validate(e.target.value);
            validType = valid ? this.props.errorSuccess : this.props.errorText;
        }      
        this.setState({
            status: valid,
            validateType: validateType
        })     
    }
    render(){
        return (
            <div>
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

export default Input;