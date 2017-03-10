import React from 'react';
import Component from './Component';
import _ from 'lodash';

class ButtonLink extends Component {
    onClick(){
        if (!_.isNil(this.props.onClick)){
            this.props.onClick();
        }
    }
    render(){
        return(
            <a onClick={this.onClick.bind(this)} href={this.props.href} className={"uk-button uk-button-link " + this.getClassName(this.props)}>
                {this.props.children}
            </a>
        )
    }
}

export default ButtonLink;