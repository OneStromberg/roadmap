import React from 'react';
import {Button, Card, Component, Input, Label, View, Text, Textarea, Title, Radio} from 'components';
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
                    <Label className="forms-label"> Textarea 
                        <Textarea className="forms-textarea">When an unknown printer took a galley of type and scrambled</Textarea>
                    </Label>
                    <Label className="forms-label"> Calendar Bar 
                        <CalendarBar className="forms-calendar-bar"/>
                    </Label>
                    <Label className="forms-label"> Other Elements 
                        <Title> <Radio checked /> Freelancer </Title>
                        <Title> <Radio /> Client </Title>
                    </Label>
                    <Label className="forms-label"> Tags 
                        <Label className="tags-label"> Deadlines </Label>
                        <Label className="tags-label"> Approves </Label>
                        <Label className="tags-label"> Changes </Label>
                    </Label>
                    <Label className="forms-label"> Notification 
                        <Text> </Text>
                        <Text> </Text>
                    </Label>
                </View>
                <View className="forms-card-column-3">
                    <Label className="forms-label"> Calendar Lines </Label>
                    <View></View>
                    <View></View>
                    <View></View>
                    <View></View>
                    <Label className="forms-label"> Buttons </Label>
                    <Button />
                </View>
        </Card>
        )
    }
}

export default FormsCard;