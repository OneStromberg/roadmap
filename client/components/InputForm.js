import React from 'react';
import View from './View';
import Input from './Input';
import Label from './Label';

class InputForm extends React.Component {
    render(){
        return (
            <View className="login">
                <Input className="field" type="text" id="" placeholder="First Name" />
                <Input className="field" type="text" id="" placeholder="Last Name" />
                <Input className="field" type="email" id="" placeholder="Email Address" />
                <Input className="field" type="password" id="" placeholder="Choose Password" />
                <Input className="field" type="password" id="" placeholder="Password Confirm" />
                <div className="checkbox">
                    <Input type="checkbox" name="" id="checkbox"/>
                    <Label type="checkbox">Send me Youbike updates and tips</Label>
                </div>
                <Input className="cma" type="submit" name="cma" value="Create my Account" />
            </View>
        )
    }
}

export default InputForm;
