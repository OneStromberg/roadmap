import React from 'react';
import { Alert, Button } from 'react-bootstrap';

/* 
* Props:
* style - one of String: "danger", "success"
* message: String
*/
class AlertMessage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alertVisible: true
        };
    }
    getCurrentComponent() {
        if (this.state.alertVisible) {
            return (<div className="alert-message-wrap">
                        <Alert onDismiss={this.handleAlertDismiss} className="alert-message-custom" bsStyle={this.props.style}>
                            <p>{this.props.message}</p> 
                        </Alert>
                    </div>);
        } else {
            return (<Button onClick={this.handleAlertShow}>Show Alert</Button>);
        }
    }
    render () {
        return this.getCurrentComponent();
    }
    handleAlertDismiss() {
        this.setState({alertVisible: false});
    }
    handleAlertShow() {
        this.setState({alertVisible: true});
  }
};

export default AlertMessage;