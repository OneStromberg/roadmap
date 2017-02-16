import React from 'react';
import {Component, View, Container, Header, Text, Title, Card, Label, Input, InputValidate} from 'components';

class InputsContainer extends Component {
    onValidate(value){
        return (value !== null && value.length > 3);
    }
    render(){
        return(
            <Container>
                <Header>
                    <Text>04</Text>
                    <Text> Inputs forms</Text>
                </Header>
                <Card className="inputs-container">
                    <Label className="forms-label"> 
                        <Text className="label-text">Send To</Text>
                        <Input className="input-empty" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" /> 
                    </Label>
                    <Label className="forms-label"> 
                        <Text className="label-text">Send To</Text>
                        <Input className="input-empty" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" /> 
                    </Label>
                    <Label className="forms-label"> 
                        <Text className="label-text">Send To</Text>
                        <InputValidate validate={this.onValidate} className="input-error" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" />
                    </Label>
                </Card>
            </Container>
        )
    }
}


export default InputsContainer;