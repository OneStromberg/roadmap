import React from 'react';
import Component from './Component';

class Button extends Component {
    render(){
        return(
            <button {...this.props} className={"uk-button uk-button-default" + this.getClassName(this.props)}>
                {this.props.children}
            </button>    
        )
    }
}

export default Button;