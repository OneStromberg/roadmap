import React from 'react';
import SideBar from './SideBar';

class LeftSideBar extends React.Component {
    _getClassName() {
        return "sidebar-wrapper " + 
        (this.props.className ? this.props.className : "") + 
        (this.props.enabled ? "show " : "hide ");
    }
    render() {
        return (
            <SideBar className="pull-left ">
                {this.props.children}
            </SideBar>
        );
    }
}

export default LeftSideBar;
