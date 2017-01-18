import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';
import * as appBar from './../../../actions/auth/appBar';

class AppBar extends React.Component {
    _getClassName(){
        return (this.props.className ? this.props.className : "");
    }
    render() {
        return (
            <Navbar className={this._getClassName()}>
                {this.props.children}
            </Navbar>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    return {
        enabled: state.application.appBar.enabled,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(appBar, dispatch);
};

export default connect(stateMap, mapDispatchToProps)(AppBar);
