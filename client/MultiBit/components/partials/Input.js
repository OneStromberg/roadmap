import React, { Component } from 'react';
import { Input } from 'components';

class Inpt extends Component {
    getClassName(props){
        var newProps = "input-empty" ;
        newProps += (props.hasOwnProperty('focused') && props.empty !== false) ? "focused " : "";
        return newProps;
    }
    render() {
        return (
            <Input type="text" className={this.getClassName(this.props)} {...this.props} /> 
        );
    }
}

export default Inpt;