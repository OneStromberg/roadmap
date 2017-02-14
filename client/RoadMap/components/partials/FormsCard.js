import React from 'react';
import {Button, Card, Component, Input, Label, View, Text, Textarea, Radio} from 'components';
import FormsSelect from './FormsSelect';
import CalendarBar from './CalendarBar';

class FormsCard extends Component {
    render(){
        return(
            <Card className="forms-card">
                <View className="forms-card-column-1">
                    <Label className="forms-label"> Input Empty <Input className="input-empty" placeholder="Type Word" /> </Label>
                    <Label className="forms-label"> Input Selected <Input className="input-selected" placeholder="Name Surname" /> </Label>                    
                    <Label className="forms-label"> Input Typing <Input className="input-typing" placeholder="Name Surname" /> </Label>
                    <Label className="forms-label"> Input Error <Input className="input-error" placeholder="Name Surname" /> </Label>
                    <Label className="forms-label"> Input Success <Input className="input-success" placeholder="Name Surname"/> </Label>
                    <Label className="forms-label"> Select Empty <FormsSelect /> </Label>
                    <Label className="forms-label"> Select Typing <FormsSelect /> </Label>
                </View>
                <View className="forms-card-column-2">
                    <Label> Textarea </Label>
                    <Textarea className="forms-textarea">When an unknown printer took a galley of type and scrambled</Textarea>
                    <Label> Calendar Bar </Label>
                    <CalendarBar className="forms-calendar-bar"/>
                    <Label> Other Elements 
                        <Label> <Radio checked /> Freelancer </Label>
                        <Label> <Radio /> Client </Label>
                    </Label>
                    <Label> Tags </Label>
                    <Label> Notification </Label>
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