import React from 'react';
import Slct from 'react-select';
import Component from './Component';
import 'react-select/dist/react-select.css';

class Select extends Component {
    render(){
        return(
                <Slct 
                    name="form-field-name"
                    value="one"
                    options={this.props.options}
                    onChange={this.props.logChange}
                />
        )
    }
}

export default Select;