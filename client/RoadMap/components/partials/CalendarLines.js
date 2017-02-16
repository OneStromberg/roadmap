import React from 'react';
import {Component, ViewColor} from 'components';

class CalendarLines extends Component {
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
