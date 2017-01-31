import React from 'react';
import Component from './Component';

class Text extends Component {
    getClassName(props){
        var newProps = "";
        newProps += (props.hasOwnProperty('lead') && props.lead !== false) ? "uk-text-lead" : "";
        newProps += (props.hasOwnProperty('meta') && props.meta !== false) ? "uk-text-meta" : "";
        newProps += (props.hasOwnProperty('primary') && props.primary !== false) ? "uk-text-primary" : "";
        newProps += (props.hasOwnProperty('success') && props.success !== false) ? "uk-text-success" : "";
        newProps += (props.hasOwnProperty('warning') && props.warning !== false) ? "uk-text-warning" : "";
        newProps += (props.hasOwnProperty('danger') && props.danger !== false) ? "uk-text-danger" : "";
        return newProps + super.getClassName(props)
    }
    render(){
        return(
            <span className={"uk-text " + this.getClassName(this.props)}>{this.props.children}</span>
        )
    }
}

export default Text;