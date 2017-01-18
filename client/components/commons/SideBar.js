import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { common } from './../../actions';

class SideBar extends React.Component {
    _getClassName(){
        return "sidebar-wrapper " + 
        (this.props.className ? this.props.className : "") + 
        (this.props.enabled ? "show " : "hide ") +
        (this.props.hasOwnProperty('pullRight') ? "pull-right " : "") +
        (this.props.hasOwnProperty('pullLeft') ? "pull-left " : "");
    }
    render() {
        return (
            <div className={this._getClassName()}>
                {this.props.children}
            </div>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    return {
        enabled: state.sideBar.enabled,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(common.sideBar, dispatch);
};

export default connect(stateMap, mapDispatchToProps)(SideBar);
