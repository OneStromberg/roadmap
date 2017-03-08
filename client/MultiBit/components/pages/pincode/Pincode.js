import React from 'react';
import Page from './../../../../common/components/Page';
import Topbar from './../../partials/Topbar';
import InputPassword from './../../partials/InputPassword';
import Button from './../../partials/Button';

import { Component, View, ButtonLink, Title, Text, Input, Label, Footer } from 'components';

class Login extends Component {
    render() {
        return (
            <Page className="pincode">
                <Topbar className="pincode-topbar">
                    <View className="topbar-round-buttons-container">
                        <Button className="topbar-round-buttons close" />
                        <Button className="topbar-round-buttons minify" />
                        <Button className="topbar-round-buttons expand" />
                    </View>
                    <Title>Multibit</Title>
                    <Button keepkey />
                </Topbar>
                <View>
                    <Title>Enter Your PIN</Title>
                    <Label className='forms-label'>
                        <Input type='password' className='input-empty' placeholder='' />
                    </Label>
                    <View className='pin-bar'>
                        <Button pin />
                        <Button pin />
                        <Button pin />
                        <Button pin />
                        <Button pin />
                        <Button pin />
                        <Button pin />
                        <Button pin />
                        <Button pin />
                    </View>
                    <Text>Look at the device for number positions</Text>
                </View>    
                <Button primary>Login</Button>
            </Page>
        );
    }
}

export default Login;

            