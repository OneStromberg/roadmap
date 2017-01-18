import React from 'react';
import { StatusType } from './../../constants';
import { FormControl, FormGroup, HelpBlock } from 'react-bootstrap';
import Button from './Button';

class PreloaderButton extends React.Component {
    _getStatus() {
        switch(this.props.status){
            case StatusType.NORMAL:
                return this.props.children ? this.props.children : null;
            case StatusType.LOADING:
                return 'Loading...';
            case StatusType.SUCCESS:
                return 'SUCCESS';
            case StatusType.FAILED:
                return 'FAILED';
        }
    }
    render() {
        return (
            <Button disabled={this.props.status === StatusType.FAILED} className="btn-1" {...this.props}>
                {this._getStatus()}
            </Button>
        );
    }
};
export default PreloaderButton;