import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { common } from './../../actions';

import Image from './Image';

class Notification extends React.Component {
  _getClassName(){
      return "notification-container " +
        (this.props.enabled ? "show" : "hide");
  }
  render() {
    return (
      <div className={this._getClassName()}>
         {this.props.enabled ? this.props.children : null}
      </div>
    );
  }
};

export default Notification;