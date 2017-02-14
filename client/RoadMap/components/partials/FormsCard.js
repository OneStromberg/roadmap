import React from 'react';
import {Button, Card, Component, Input, Label, View, Text} from 'components';
import FormsSelect from './FormsSelect';

class FormsCard extends Component {
    render(){
        return(
            <Card className="forms-card">
                <View className="forms-card-column-1">
                    <Label className="forms-label"> Input Empty <Input /> </Label>
                    <Label className="forms-label"> Input Selected <Input /> </Label>                    
                    <Label className="forms-label"> Input Typing <Input /> </Label>
                    <Label className="forms-label"> Input Error <Input /> </Label>
                    <Label className="forms-label"> Input Success <Input /> </Label>
                    <Label className="forms-label"> Select Empty <FormsSelect /> </Label>
                    <Label className="forms-label"> Select Typing <FormsSelect /> </Label>
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