import React from 'react';
import FormWrap, {Form_1} from './../../commons/FormWrap';
import Label from './../../commons/Label'
import FormGroup from './../../commons/FormGroup';
import ValidatorTextField from './../../commons/ValidatorTextField';

const FormSection = () => (
        <FormWrap>
            <FormGroup>
                <Label className="lbl-1">
                    Form styles
                </Label>
            </FormGroup>
            <Form_1>
                <FormGroup>
                    <Label className="lbl-6">
                        Form_1 component
                    </Label>
                </FormGroup>
                <FormGroup>
                    <ValidatorTextField placeholder="ex. Sam Johanson" errorText="You have entered an invalid email address!"/>
                </FormGroup>
                <FormGroup>
                    <ValidatorTextField placeholder="****" errorText="Password has to be over 7 characters"/>
                </FormGroup>
            </Form_1>
        </FormWrap>
);

export default FormSection;