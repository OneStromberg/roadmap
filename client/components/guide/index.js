import React from 'react';
import { connect, Provider } from 'react-redux';
import { Col, Clearfix, Row } from 'react-bootstrap';
import ValidatorTextField from './../commons/ValidatorTextField';
import { validateName } from './../../utils';
import Buttons from './Buttons';
import TextSection from './Text';
import FormSection from './forms';
import CheckBoxSection from './checkbox';
import FormGroup from './../commons/FormGroup';

class ComponentsApp extends React.Component {
    render() {
        return(
            <div className="guide-container-fluid">
                <div className="guide-container">
                    <TextSection/>
                    <Buttons/>
                    <CheckBoxSection/>
                    <FormSection/>
                    <FormGroup>
                    </FormGroup >
                </div>
            </div>
        );
    };
};

export default ComponentsApp;