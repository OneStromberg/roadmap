import React from 'react';
import Button from './../commons/Button';
import Image from './../commons/Image';
import FormWrap from './../commons/FormWrap';

class ComponentsApp extends React.Component {
    render() {
        return(
            <FormWrap>
                <Image src="assets/img/logo.png" alt="loop" />
                <Button> HELLOW </Button>
            </FormWrap>
        );
    };
};

export default ComponentsApp;