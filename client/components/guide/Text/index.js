import React from 'react';

import Label from './../../commons/Label';
import FormWrap, {Form_1} from './../../commons/FormWrap';
import FormGroup from './../../commons/FormGroup';


const TextSection = () => (
    <FormWrap>
        <FormGroup>
            <Label className="lbl-1">Text styles</Label>
        </FormGroup>
        <Form_1>
            <FormGroup>
                <Label className="lbl-1">
                    Label-1 (Title)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-2">
                    Label-2 (Red text for error)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-3">
                    Label-3
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-4">
                    Label-4
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-6">
                    Label-6 (input title)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-7">
                    Label-7 (input text Disabled)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-8">
                    Label-8 (input Enabled)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-9">
                    Label-9 (Subtitle)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-10">
                    Label-10 ("need help") for child link color white
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-11">
                    Label-11 (copyright text)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-12">
                    Label-12 (for natification)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-13">
                    Label-13 (checkbox)
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-14">
                    Label-14 
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-15">
                    Label-15 
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-16">
                    Label-16 
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-17">
                    Label-17 
                </Label>
            </FormGroup>
            <FormGroup>
                <Label className="lbl-18">
                    Label-18
                </Label>
            </FormGroup>
        </Form_1>
    </FormWrap>
);

export default TextSection;