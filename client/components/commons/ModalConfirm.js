import React from 'react';
import Label from './Label';
import {Alert, Button, Modal} from 'react-bootstrap';

class ModalConfirm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false
        };
    }
    render() {
        let close = () => this.setState({show: false});
        return (
            <div className="modal-container modal-confirm">
                <Button
                    bsStyle="primary"
                    bsSize="large"
                    onClick={() => this.setState({show: true})}>
                    Launch contained modal
                </Button>
                <Modal
                    show={this.state.show}
                    onHide={close}
                    container={this}
                    aria-labelledby="contained-modal-title">
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title">Set treshold</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="modal-confirm-alert">
                            <p>By setting trashold you also set alert notiffication</p>
                        </div>
                        <div className="modal-confirm-input">
                            <Label htmlFor="modal-input">Current trashold</Label>
                            <input type="text" name="modal-input" placeholder="4.56mm"></input>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="btn-cancel" onClick={close}>Cancel</Button>
                        <Button onClick={close}>Save</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
};

export default ModalConfirm;