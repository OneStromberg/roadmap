import React from 'react';
import {View} from 'components';
import Page from './../../../../common/components/Page';
import LoginForm from './../../partials/LoginForm';

class Login extends React.Component {
    render(){
        return(
            <Page className="flex">
                <View className="login-background"></View>
                <View className="login-container">
                    <LoginForm />
                </View>
            </Page>
        )
    }
}

export default Login;