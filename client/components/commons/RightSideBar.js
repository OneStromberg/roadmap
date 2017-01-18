import React from 'react';
import SideBar from './SideBar';

class RightSideBar extends React.Component {
    _getClassName() {
        return "sidebar-wrapper " + 
        (this.props.className ? this.props.className : "") + 
        (this.props.enabled ? " show" : " hide");
    }
    render() {
        return (
            <SideBar className="pull-right ">
                {this.props.children}
            </SideBar>
        );
    }
}

export default RightSideBar;