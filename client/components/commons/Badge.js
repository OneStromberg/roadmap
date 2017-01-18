import React from 'react';

import {Badge} from 'react-bootstrap'

class CustomBadge extends React.Component{
    _getClassName(){
        return this.props.className ? this.props.className : "";
    }
    render(){
        return(
            <div className={this._getClassName()}>
                <Badge>{this.props.count}</Badge>
            </div>
        )
    }
}

export default CustomBadge;