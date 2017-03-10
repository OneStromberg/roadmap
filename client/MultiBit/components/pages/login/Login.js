import React from 'react';
import Page from './../../../../common/components/Page';

import Select from './../../partials/Select';
import InputPassword from './../../partials/InputPassword';
import Logo from './../../partials/Logo';
import Button from './../../partials/Button';
import AppWindowControls from './../../partials/AppWindowControls';
import { browserHistory } from 'react-router'
import { Component, View, ButtonLink, Footer, Title, Header } from 'components';
import { Routes } from './../../../constants'
var profile = [{
    name: "Roberta profile"
}, {
    name: "Bitcoin Address"
}, {
    name: "Litecoin Address"
}];

class Login extends Component {
    onLogingClick(){
        browserHistory.push(Routes.OVERVIEW);
    }
    onCreateClick(){
        browserHistory.push(Routes.CREATEACC_KEYWORDS_FILLED);
    }
    render() {
        return (
            <Page className="login">
                <AppWindowControls>
                    <Title>Multibit</Title>
                </AppWindowControls>
                <Logo />
                <Select list={profile} selected={0} />
                <View>
                    <InputPassword />
                </View>
                <View>
                    <ButtonLink onClick={this.onCreateClick} className="login-button-link">or Create new profile</ButtonLink>
                </View>
                <Footer>
                    <Button onClick={this.onLogingClick} primary>Login</Button>
                </Footer>
            </Page>
        );
    }
}

export default Login;