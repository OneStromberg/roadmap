import React from 'react';

import {FormControl, FormGroup, HelpBlock} from 'react-bootstrap';

const ValidatorTextField = React.createClass({
    getInitialState() {
        return {
            status:null,
            value:this.props.value,
            errorText: '',
        };
    },
    getStatus(){
        if (this.state.status != null) {
            return this.state.status;
        }
    },
    handleChange(e) {
        var errorText = null;
        var status = null;
        var validated = false;

       if (this.props.validate != null) {
            validated = this.props.validate(e.target.value);
            status = validated ? 'success' : 'error';
            errorText = validated ? null : this.props.errorText;
        } 

        this.setState({
            value: e.target.value,
            errorText: errorText,
            status:status
        });
        
        if (this.props.onChange){
            this.props.onChange(validated, e.target.value);
        }
    },
    onBlur(e) {
        this.handleChange(e);
    },
    render() {
        return (           
            <form> 
                <FormGroup
                    onBlur={this.onBlur}
                    controlId="formValidateText"
                    validationState={this.getStatus()}>
                    <FormControl
                        type="text"
                        defaultValue={this.state.value}
                        placeholder={this.props.placeholder}
                        onChange={this.handleChange}
                        disabled={this.props.disabled}
                    />
                    <FormControl.Feedback />
                    <HelpBlock>{this.state.errorText}</HelpBlock>
                </FormGroup>  
            </form>         
        );
    }
});
export default ValidatorTextField;