import React from 'react';

import { Navbar } from 'react-bootstrap';
import Label from './Label';

class SubBarHeader extends React.Component {
    render(){
        return(
            <div className="sub-bar-header">
                 <Label className="lbl-16">{this.props.pageName}</Label>
            </div>
        );
    }
}

export default SubBarHeader;