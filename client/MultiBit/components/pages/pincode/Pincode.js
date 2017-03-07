import React from 'react';
import Page from './../../../../common/components/Page';
import Topbar from './../../partials/Topbar';

import InputPassword from './../../partials/InputPassword';

import { Component, View, ButtonLink, Button, Footer, Header } from 'components';

class Login extends Component {
    render() {
        return (
            <Page className="pincode">
                <Topbar />
                
            </Page>
        );
    }
}

export default Login;