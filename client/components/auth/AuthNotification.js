import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Notification from './../commons/Notification';
import Image from './../commons/Image';
import Timer from './../commons/Timer';

import { common } from './../../actions';

class AuthNotification extends React.Component {
    render() {
        return(
            <Notification enabled={this.props.enabled}>
                <Image src="./assets/img/i.png" />
                <p>{this.props.message}</p>
                <Timer>{this.props.duration}</Timer>
            </Notification>
        );
    }
}

const stateMap = (state, props, ownProps) => {
    return {
        message: state.application.notification.message,
        duration: state.application.notification.duration,
        enabled: state.application.notification.enabled,
    };
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators(common.notification, dispatch);
};

export default connect(stateMap, mapDispatchToProps)(AuthNotification);