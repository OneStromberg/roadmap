import React from 'react';
import {Button, Card, Component, Input, Label, View, Text} from 'components';
import FormsSelect from './FormsSelect';

class FormsCard extends Component {
    render(){
        return(
            <Card className="forms-card">
                <View className="forms-card-column-1">
                    <Label> Input Empty </Label>
                    <Input />
                    <Label> Input Selected</Label>
                    <Input />
                    <Label> Input Typing </Label>
                    <Input />
                    <Label> Input Error </Label>
                    <Input />
                    <Label> Input Success </Label>
                    <Input />
                    <Label>Selected</Label>
                    <FormsSelect />
                    <Label></Label>
                    <FormsSelect />
                </View>
                <View className="forms-card-column-2">
                    <Label> Textarea </Label>
                    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                    <Label> Calendar Bar </Label>
                    <Label> Other Elements </Label>
                </View>
                <View className="forms-card-column-3">
                    <Label> Calendar Lines </Label>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                    <Label> Buttons </Label>
                    <Button />
                </View>
        </Card>
        )
    }
}

export default FormsCard;