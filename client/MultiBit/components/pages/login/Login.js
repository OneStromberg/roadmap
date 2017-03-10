import React from 'react';
import Page from './../../../../common/components/Page';
import Topbar from './../../partials/Topbar';
import Select from './../../partials/Select';
import InputPassword from './../../partials/InputPassword';
import Logo from './../../partials/Logo';
import Button from './../../partials/Button';
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
    render() {
        return (
            <Page className="login">
                <Topbar>
                    <View className="topbar-round-buttons-container">
                        <Button className="topbar-round-buttons close" />
                        <Button className="topbar-round-buttons minify" />
                        <Button className="topbar-round-buttons expand" />
                    </View>
                    <Title>Multibit</Title>
                </Topbar>
                <Logo />
                <Select list={profile} selected={0} />
                <View>
                    <InputPassword />
                </View>
                <View>
                    <ButtonLink className="login-button-link">or Create new profile</ButtonLink>
                </View>
                <Footer>
                    <Button onClick={this.onLogingClick} primary>Login</Button>
                </Footer>
            </Page>
        );
    }
}

export default Login;