import React from 'react';
import {Button, Card, Checkbox, Component, Input, InputValidate, Label, View, Text, Textarea, Title, Radio} from 'components';
import FormsSelect from './FormsSelect';
import CalendarBar from './CalendarBar';
import CalendarLines from './CalendarLines';
import ErrorImage from './ErrorImage';
import SuccessImage from './SuccessImage';
import {onValidate} from './../../../../common/utils/validate';

class FormsCard extends Component {
    render(){
        return(
            <Card className="forms-card">
                <View>
                    <Label className="forms-label"> Input Empty <Input className="input-empty" placeholder="Type Word" /> </Label>
                    <Label className="forms-label"> Input Selected <Input className="input-selected" placeholder="Name Surname" /> </Label>                    
                    <Label className="forms-label"> Input Typing <Input className="input-typing" placeholder="Name Surname" /> </Label>
                    <Label className="forms-label"> Input Error <InputValidate state={[<ErrorImage  key="error_message" />]} states={[<SuccessImage key="success"/>, <ErrorImage key="error"/>]} validate={onValidate} className="input-error" placeholder="Name Surname" /> </Label>
                    <Label className="forms-label"> Input Success <InputValidate state={[<SuccessImage  key="success_message" />]} states={[<SuccessImage key="success"/>, <ErrorImage key="error"/>]} validate={onValidate} className="input-success" placeholder="Name Surname" /> </Label>
                    <Label className="forms-label"> Select Empty <FormsSelect /> </Label>
                    <Label className="forms-label"> Select Typing <FormsSelect /> </Label>
                </View>
                <View>
                    <Label className="forms-label"> <Text> Textarea </Text>
                        <Textarea className="forms-textarea">When an unknown printer took a galley of type and scrambled</Textarea>
                    </Label>
                    <Label className="forms-label"> <Text> Calendar Bar </Text> 
                        <CalendarBar className="forms-calendar-bar"/>
                    </Label>
                </View>
                <View>
                    <Label className="forms-label"> <Text> Calendar Lines </Text>
                        <CalendarLines className="calendar-lines-view" background="linear-gradient(147deg, #fd6363 0%, #ffb0cb 100%)" leftComponent={<Label className="calendar-lines-label">Step 2</Label>} rightComponent={<Label className="calendar-lines-label">failed</Label>} />
                        <CalendarLines className="calendar-lines-view" background="linear-gradient(147deg, #4fbead 0%, #54d3dc 100%)" leftComponent={<Label className="calendar-lines-label">Step 2</Label>} rightComponent={<Label className="calendar-lines-label">done</Label>} />
                        <CalendarLines className="calendar-lines-view" background="linear-gradient(147deg, #839dfe 0%, #75c1f1 100%)" leftComponent={<Label className="calendar-lines-label">Step 2</Label>} rightComponent={<Label className="calendar-lines-label"></Label>} />
                        <CalendarLines className="calendar-lines-view" background="linear-gradient(147deg, #839dfe 0%, #75c1f1 100%)" leftComponent={<Label className="calendar-lines-label">Step 1</Label>} rightComponent={<Label className="calendar-lines-label">waiting for approval</Label>} />
                    </Label>
                    <Label className="forms-label"> <Text className="forms-label-text"> Buttons </Text>
                        <Button className="main-button"> Normal </Button>
                        <Button className="secondary-button-blue"> Normal </Button>
                        <Button className="secondary-button-white"> Normal </Button>
                    </Label>
                </View>
        </Card>
        )
    }
}

export default FormsCard;

