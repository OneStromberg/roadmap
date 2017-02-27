import React from 'react';
import {Component} from 'components';

class InputValidate extends Component {
    constructor(props){
        super(props);
        this.state = {
            validType: props.state
        }
    }
    onValidate(e){
        let validType = null;
        let valid = null;
        if(typeof this.props.validate === 'function'){
            validType = this.props.validate(e.target.value, this.props.state);
        }
        console.log(validType);
        this.setState({
            validType: validType
        })     
    }
    render(){
        return (
            <div className="input-validator">
                <input
                type={this.props.type ? this.props.type : ""} 
                className={this.state.validType ? "uk-input input-error " : "uk-input " + this.getClassName(this.props)} 
                placeholder={this.props.placeholder ? this.props.placeholder : ""} 
                disabled={this.props.disabled ? this.props.disabled : null}
                onChange={(e) => this.onValidate(e)}

                />
            </div>
        )
    }
}

export default InputValidate;