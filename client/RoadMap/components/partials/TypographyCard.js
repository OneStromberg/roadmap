import React from 'react';
import {Card, Component, Input, View} from 'components';

class TypographyCard extends Component {
    render(){
        return(
            <Card className="typography-card">
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

export default TypographyCard;