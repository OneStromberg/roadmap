import React from 'react';
import {Button, Card, Component, Input, Label, View, Text, Textarea, Title, Radio} from 'components';
import FormsSelect from './FormsSelect';
import CalendarBar from './CalendarBar';
import CalendarLines from './CalendarLines';

class FormsCard extends Component {
    render(){
        return(
            <Card className="forms-card">
                <View>
                    <Label className="forms-label"> Input Empty <Input className="input-empty" placeholder="Type Word" /> </Label>
                    <Label className="forms-label"> Input Selected <Input className="input-selected" placeholder="Name Surname" /> </Label>                    
                    <Label className="forms-label"> Input Typing <Input className="input-typing" placeholder="Name Surname" /> </Label>
                    <Label className="forms-label"> Input Error <Input className="input-error" placeholder="Name Surname" /> </Label>
                    <Label className="forms-label"> Input Success <Input className="input-success" placeholder="Name Surname"/> </Label>
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
                    <Label className="forms-label"> <Text> Other Elements </Text>
                        <Title> <Radio checked /> Freelancer </Title>
                        <Title> <Radio /> Client </Title>
                    </Label>
                    <Label className="forms-label"> <Text> Tags </Text>
                        <Label className="tags-label"> Deadlines </Label>
                        <Label className="tags-label"> Approves </Label>
                        <Label className="tags-label"> Changes </Label>
                    </Label>
                    <Label className="forms-label"> <Text> Notification </Text>
                        <Text> Some text </Text>
                        <Text> Some text </Text>
                    </Label>
                </View>
                <View>
                    <Label className="forms-label"> <Text> Calendar Lines </Text>
                        <CalendarLines background="linear-gradient(147deg, #fd6363 0%, #ffb0cb 100%)" leftComponent={<Label></Label>} rightComponent={<Label></Label>} />
                        <CalendarLines background="linear-gradient(147deg, #4fbead 0%, #54d3dc 100%)" leftComponent={<Label></Label>} rightComponent={<Label></Label>} />
                        <CalendarLines background="linear-gradient(147deg, #839dfe 0%, #75c1f1 100%)" leftComponent={<Label></Label>} rightComponent={<Label></Label>} />
                        <CalendarLines background="linear-gradient(147deg, #839dfe 0%, #75c1f1 100%)" leftComponent={<Label></Label>} rightComponent={<Label></Label>} />
                    </Label>
                    <Label className="forms-label"> <Text> Buttons </Text>
                        <Button> Normal </Button>
                    </Label>
                </View>
        </Card>
        )
    }
}

export default FormsCard;

