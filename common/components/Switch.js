import React from 'react';
import Component from './Component';
import Checkbox from './Checkbox';
import View from './View';

class Switch extends Component {
    render(){
        return(
            <label className="switch">
                <Checkbox checked={true}/>
                <View className="slider circle"></View>
            </label>
        )
    }
}

export default Switch;