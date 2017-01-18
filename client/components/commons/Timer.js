import React from 'react';
import Label from './Label';

class Timer extends React.Component {
    _getClassName(){
        return "timer " +
            (this.props.className ? this.props.className : "");
    }
    render() {
        return (
            <p className={this._getClassName()}>{this.props.children}</p>
        );
    }
};
export default Timer;