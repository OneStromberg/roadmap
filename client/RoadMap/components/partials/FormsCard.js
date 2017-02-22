import React from 'react';
import {Button, Card, Checkbox, Component, Input, Image, InputValidate, Label, View, Text, Textarea, Title, Radio, Switch} from 'components';
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
                    <View className="forms-card-label">
                        <Label>Input Empty</Label>
                        <View><Input empty placeholder="Type Word" /></View>
                    </View>
                    <View className="forms-card-label">
                        <Label>Input Selected</Label>
                        <View><Input selected placeholder="Name Surname" /></View>
                    </View>                   
                    <View className="forms-card-label">
                        <Label>Input Typing</Label>
                        <View><Input typing placeholder="Name Surname"/></View>
                    </View>
                    <View className="forms-card-label">
                        <Label>Input Error</Label>
                        <InputValidate error state={[<ErrorImage  key="error_message" />]} states={[<SuccessImage key="success"/>, <ErrorImage key="error"/>]} validate={onValidate} placeholder="Name Surname" />
                    </View>
                    <View className="forms-card-label">
                        <Label>Input Success</Label>
                        <InputValidate success state={[<SuccessImage  key="success_message" />]} states={[<SuccessImage key="success"/>, <ErrorImage key="error"/>]} validate={onValidate} placeholder="Name Surname" />
                    </View>
                    <View className="forms-card-label">
                        <Label>Select Empty</Label>
                        <FormsSelect />
                    </View>
                    <View className="forms-card-label">
                        <Label>Select Typing</Label>
                        <FormsSelect />
                    </View>
                </View>
                <View>
                    <View className="forms-card-label">
                         <Label> Textarea </Label>
                         <Textarea className="forms-textarea">When an unknown printer took a galley of type and scrambled</Textarea>
                    </View>
                    <View className="forms-card-label"> 
                        <Label> Calendar Bar </Label> 
                        <CalendarBar className="forms-calendar-bar"/>
                    </View>
                    <View className="forms-card-label">
                        <Label> Other Elements</Label>
                        <View>
                            <Radio />
                            <Label>Freelancer</Label>
                        </View>
                        <View>
                            <Checkbox />
                            <Label>Keep me logged in</Label>
                        </View>
                        <View>
                            <Switch />
                        </View>
                    </View>
                    <View className="forms-card-label">
                        <Label> Notification </Label>
                        <View>
                            <Image src="assets/roadmap/i-icon.png" />
                            <Text>After client approve, this project will be moved to «on hold»</Text>
                        </View>
                        <View>
                            <Image src="assets/roadmap/i-icon.png" />
                            <Text>After client approve, this project will be moved to «on hold»</Text>
                        </View>    
                    </View>
                </View>
                <View>
                    <View className="forms-card-label">
                        <Label> Calendar Lines </Label>
                        <CalendarLines lines background="linear-gradient(147deg, #fd6363 0%, #ffb0cb 100%)" leftComponent={<Label className="calendar-lines-label">Step 2</Label>} rightComponent={<Label className="calendar-lines-label">failed</Label>} />
                        <CalendarLines lines background="linear-gradient(147deg, #4fbead 0%, #54d3dc 100%)" leftComponent={<Label className="calendar-lines-label">Step 2</Label>} rightComponent={<Label className="calendar-lines-label">done</Label>} />
                        <CalendarLines lines background="linear-gradient(147deg, #839dfe 0%, #75c1f1 100%)" leftComponent={<Label className="calendar-lines-label">Step 2</Label>} rightComponent={<Label className="calendar-lines-label"></Label>} />
                        <CalendarLines lines background="linear-gradient(147deg, #839dfe 0%, #75c1f1 100%)" leftComponent={<Label className="calendar-lines-label">Step 1</Label>} rightComponent={<Label className="calendar-lines-label">waiting for approval</Label>} />
                    </View>
                    <View className="forms-card-label"> 
                        <Label> Buttons </Label>
                        <Button className="main-button"> Normal </Button>
                        <Button className="secondary-button-blue"> Normal </Button>
                        <Button className="secondary-button-white"> Normal </Button>
                    </View>
                </View>
        </Card>
        )
    }
}

export default FormsCard;

