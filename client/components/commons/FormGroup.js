import React from 'react';
import {FormGroup} from 'react-bootstrap';

class WrapperFormGroup extends React.Component {
    constructor(props){
        super(props);
        this.className = null;
        if (props.hasOwnProperty('center')) {
            this.className = "center";
            this.formatedProps = Object.assign({}, props);
            delete this.formatedProps['center'];
        } else {
            this.formatedProps = props;
        }
    }
    render(){
        return(
            <FormGroup {...this.formatedProps} className={this.className}>
                {this.props.children}
            </FormGroup>
            );
    }
};

export default WrapperFormGroup;