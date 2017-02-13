import React from 'react';
import {Card, Component, Input, View} from 'components';

class TypographyCard extends Component {
    render(){
        return(
            <Card className="typography-card">
                <View className="">
                    <Label>Input Empty</Label>
                    <Input />
                    <Label>Input Selected</Label>
                    <Input />
                    <Label>Input Typing</Label>
                    <Input />
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