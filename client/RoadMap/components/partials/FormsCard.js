import React from 'react';
import {Card, Component, Label, View} from 'components';

class FormsCard extends Component {
    render(){
        return(
            <Card>
            <View className="">
                <Label>Input Empty</Label>
                <Input type="text"/>
                <Label>Input Selected</Label>
                <Input type="text"/>
                <Label>Input Typing</Label>
                <Input type="text"/>
                <Label>Input Error</Label>
                <Input />
            </View>
            <View className="">
                <Label></Label>
                <Text></Text>
            </View>
            <View className="">
            </View>
        </Card>
        )
    }
}

export default FormsCard;