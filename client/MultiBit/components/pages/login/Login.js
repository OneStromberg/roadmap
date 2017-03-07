import React from 'react';
import Page from './../../../../common/components/Page';
import Topbar from './../../partials/Topbar';

import Select from './../../partials/Select';
import InputPassword from './../../partials/InputPassword';
import Logo from './../../partials/Logo';

import { Component, View, ButtonLink, Button, Footer, Header } from 'components';

var profile = [{
    name: "Roberta profile"
}, {
    name: "Bitcoin Address"
}, {
    name: "Litecoin Address"
}];

class Login extends Component {
    render() {
        return (
            <Page className="login">
                <Header>
                    <Topbar />
                </Header>
                <Logo />
                <Select list={profile} selected={0} />
                <View>
                    <InputPassword />
                </View>
                <View>
                    <ButtonLink className="login-button-link">or Create new profile</ButtonLink>
                </View>
                <Footer>
                    <Button primary>Login</Button>
                </Footer>
            </Page>
        );
    }
}

export default Login;