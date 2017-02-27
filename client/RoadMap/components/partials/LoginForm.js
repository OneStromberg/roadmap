import React from 'react';
import {Button, Component, Checkbox, Label, Link, Input, Password, Radio, View} from 'components';

class LoginForm extends Component {
    render(){
        return(
            <View className="login-form">
                <View>
                    <Label>RoadMap</Label>
                </View>
                <View>
                    <Label>Create Your Free Account</Label>
                </View>
                <View>
                    <Radio />
                    <Label>Freelancer</Label>
                </View>
                <View>
                    <Radio />
                    <Label>Client</Label>
                </View>
                <View>
                    <Label>Name</Label>
                    <Input />
                </View>
                <View>
                    <Label>Company</Label>
                    <Input />
                </View>
                <View>
                    <Label>E-mail</Label>
                    <Input />
                </View>
                <View>
                    <Label>Password</Label>
                    <Password />
                </View>
                <View>
                    <Label>Confirm Password</Label>
                    <Password />
                </View>
                <View>
                    <Button>Create Account</Button>
                </View>
                <View>
                    <Label>Already have an account ?</Label>
                    <Link>Login</Link>
                </View>
                <View>
                    <Label>By clicking "Create account" I agree to</Label>
                    <Link>Terms of Service</Link>
                </View>    
            </View>
        )
    }
}

export default LoginForm;