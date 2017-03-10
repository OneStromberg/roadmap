import React from 'react';
import {Component} from 'components';

const ButtonClassPrefix = "uk-button-";

class Button extends Component {
    getClassName(props){
        var newProps = "";
        newProps += (props.hasOwnProperty('primary') && props.primary !== false) ? ButtonClassPrefix + "primary" : "";
        newProps += (props.hasOwnProperty('default') && props.default !== false) ? ButtonClassPrefix + "default" : "";
        newProps += (props.hasOwnProperty('secondary') && props.secondary !==false) ? ButtonClassPrefix + "secondary" : "";
        newProps += (props.hasOwnProperty('danger') && props.danger !== false) ? ButtonClassPrefix + "danger" : "";
        newProps += (props.hasOwnProperty('text') && props.text !== false) ? ButtonClassPrefix + "text" : "";
        newProps += (props.hasOwnProperty('link') && props.link !== false) ? ButtonClassPrefix + "link" : "";
        newProps += (props.hasOwnProperty('help') && props.help !== false) ? ButtonClassPrefix + "help" : "";
        newProps += (props.hasOwnProperty('pin') && props.pin !== false) ? ButtonClassPrefix + "pin" : "";
        newProps += (props.hasOwnProperty('keepkey') && props.keepkey !== false) ? ButtonClassPrefix + "keepkey" : "";
        newProps += (props.hasOwnProperty('back') && props.back !== false) ? ButtonClassPrefix + "back" : "";
        newProps += (props.hasOwnProperty('asset') && props.asset !== false) ? ButtonClassPrefix + "asset" : "";
        newProps += (props.hasOwnProperty('notification') && props.notification !== false) ? ButtonClassPrefix + "notification" : "";
        newProps += (props.hasOwnProperty('retry') && props.retry !== false) ? ButtonClassPrefix + "retry" : "";
        return newProps + super.getClassName(props);
    }
    render(){
        return(
            <button onClick={this.props.onClick} className={"uk-button " + this.getClassName(this.props)}>
                {this.props.children}
            </button>    
        )
    }
}

export default Button;