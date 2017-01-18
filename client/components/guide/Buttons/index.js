import React from 'react';
import { Link } from 'react-router';

import FormWrap, {Form_1} from './../../commons/FormWrap';
import FormGroup from './../../commons/FormGroup';
import Label from './../../commons/Label'
import Button from './../../commons/Button';
import PreloaderButton from './../../commons/PreloaderButton';

const Buttons = () => (
            <FormWrap>
                <FormGroup>
                    <Label className="lbl-1">Button styles</Label>
                </FormGroup>
                <Form_1>
                    <FormGroup>
                        <Button className="btn-1">Btn-1</Button>
                        <Button className="btn-1" disabled={true}>Btn-1</Button>
                    </FormGroup>
                    <FormGroup className="guide-group">
                        <Button className="btn-2">Btn-2</Button>
                        <Button className="btn-2" disabled={true}>Btn-2</Button>
                    </FormGroup>
                    <FormGroup className="guide-group">
                        <Button className="btn-3">Btn-3</Button>
                        <Button className="btn-3" disabled={true}>Btn-3</Button>
                    </FormGroup>
                    <FormGroup className="guide-group">
                        <Button className="btn-4">Btn-4</Button>
                        <Button className="btn-4" disabled={true}>Btn-4</Button>
                    </FormGroup>
                    <FormGroup className="guide-group">
                        <Button className="btn-5">
                            <Link to="/" activeClassName="is-active">
                                <img src="assets/img/icon/export.png" alt=""/>
                                Export
                            </Link>
                        </Button>
                        <Button className="btn-5" disabled={true}>
                        <Link to="/" activeClassName="is-active">
                                <img src="assets/img/icon/export.png" alt=""/>
                                Export
                            </Link>          
                        </Button>
                    </FormGroup>
                    <FormGroup className="guide-group with-background">
                        <Button className="btn-6">
                            <Link to="/" activeClassName="is-active">
                                <img src="assets/img/icon/export.png" alt=""/>
                                Export
                            </Link>
                        </Button>
                        <Button className="btn-6" disabled={true}>
                        <Link to="/" activeClassName="is-active">
                                <img src="assets/img/icon/export.png" alt=""/>
                                Export
                            </Link>          
                        </Button>
                    </FormGroup>
                </Form_1>
            </FormWrap>
);

export default Buttons;