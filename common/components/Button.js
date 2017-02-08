import React from 'react';
import Component from './Component';

const ButtonClassPrefix = "uk-button-";

class Button extends Component {
    getClassName(props){
        var newProps = "";
        newProps += (props.hasOwnProperty('primary') && props.primary !== false) ? ButtonClassPrefix + "primary" : "";
        newProps += (props.hasOwnProperty('default') && props.primary !== false) ? ButtonClassPrefix + "default" : "";
        newProps += (props.hasOwnProperty('secondary') && props.secondary !==false) ? ButtonClassPrefix + "secondary" : "";
        newProps += (props.hasOwnProperty('danger') && props.danger !== false) ? ButtonClassPrefix + "danger" : "";
        newProps += (props.hasOwnProperty('text') && props.text !== false) ? ButtonClassPrefix + "text" : "";
        newProps += (props.hasOwnProperty('link') && props.link !== false) ? ButtonClassPrefix + "link" : "";
        return newProps + super.getClassName(props);
    }
    render(){
        return(
            <button className={"uk-button " + this.getClassName(this.props)}>
                {this.props.children}
            </button>    
        )
    }
}

export default Button;