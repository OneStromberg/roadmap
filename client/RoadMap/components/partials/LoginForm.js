import React from 'react';
import {Button, Component, Checkbox, Label, Link, Input, Password, Radio, View} from 'components';

class LoginForm extends Component {
    render(){
        return(
            <View className="login-form">
                <View>
                    <Label className="login-main-title">RoadMap</Label>
                </View>
                <View>
                    <Label className="login-secondary-title">Create Your Free Account</Label>
                </View>
                <View className="login-radio">
                    <Radio className=""/>
                    <Label>Freelancer</Label>
                    <Radio className=""/>
                    <Label>Client</Label>
                </View>
                <View className="login-input-container">
                    <Label className="login-input">Name</Label>
                    <Input placeholder="Name Surname" />
                </View>
                <View className="login-input-container">
                    <Label className="login-input">Company</Label>
                    <Input placeholder="Google" />
                </View>
                <View className="login-input-container">
                    <Label className="login-input">E-mail</Label>
                    <Input placeholder="clark@dashboard.com"/>
                </View>
                <View className="login-input-container">
                    <Label className="login-input">Password</Label>
                    <Password />
                </View>
                <View className="login-input-container">
                    <Label className="login-input">Confirm Password</Label>
                    <Password />
                </View>
                <View>
                    <Button className="login-button">Create Account</Button>
                </View>
                <View className="login-link-container">
                    <Label>Already have an account ?</Label>
                    <Link>Login</Link>
                </View>
                <View className="login-link-container">
                    <Label>By clicking "Create account" I agree to</Label>
                    <Link>Terms of Service</Link>
                </View>    
            </View>
        )
    }
}

export default LoginForm;