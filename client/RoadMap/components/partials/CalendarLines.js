import React from 'react';
import {Component, ViewColor} from 'components';

class CalendarLines extends Component {
    getClassName(props){
        var newProps = "";
        newProps += props.className + ' ' ;
        newProps += (props.hasOwnProperty('lines') && props.empty !== false) ? "calendar-lines-view " : "";
        return newProps
        }

    render(){
        return(
            <ViewColor background={this.props.background} className={this.getClassName(this.props)}>
            {this.props.leftComponent}
            {this.props.rightComponent}
            </ViewColor>
        )
    }
}

export default CalendarLines;
