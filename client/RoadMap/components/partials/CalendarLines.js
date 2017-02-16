import React from 'react';
import {Component, ViewColor} from 'components';

class CalendarLines extends Component {
    render(){
        return(
            <ViewColor background={this.props.background} className="calendar-lines-view">
            {this.props.leftComponent}
            {this.props.rightComponent}
            </ViewColor>
        )
    }
}

export default CalendarLines;
