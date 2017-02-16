import React from 'react';
import Component from './Component';

class ButtonLink extends Component {
    render(){
        return(
            <a href={this.props.href} className={"uk-button uk-button-link " + this.getClassName(this.props)}>
                {this.props.children}
            </a>
        )
    }
}

export default ButtonLink;