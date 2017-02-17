import React from 'react';
import {Component, TabBar, TabButton} from 'components';

const items =  ['days', 'weeks', 'month'];

class CalendarBar extends Component {
    _getClassName(){
        return(
            this.props.className || ""
        )
    }
    render(){
        return(
            <TabBar className={this._getClassName()} activeItem={3} >
               {items}
            </TabBar>
        )
    }
}

export default CalendarBar;