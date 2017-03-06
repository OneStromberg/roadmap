import React from 'react';
import {Component, Container, View, Header, Text, Title, Card, Label, ButtonLink, Image, Checkbox} from 'components';
import InputValidate from './InputValidate';
import {onValidate} from './../../../../common/utils/validate';

import ConvertInput from './ConvertInput';
import Input from './Input';
import InputPassword from './InputPassword';

class InputsContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>04</Text>
                    <Text> Inputs forms</Text>
                </Header>
                <Card className="inputs-container">
                    <View>
                        <Label className="forms-label"> 
                            <Text className="label-text">Send To</Text>
                            <Input type="text" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" /> 
                        </Label>
                        <Label className="forms-label"> 
                            <Text className="label-text">Send To</Text>
                            <Input type="text" focused checked placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" /> 
                        </Label>
                        <Label className="forms-label"> 
                            <Text className="label-text">Send To</Text>
                            <InputValidate type="text" className="input-empty " state={['', 'input-error']} validate={onValidate} placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" />
                        </Label>

                        <InputPassword />
                        <InputPassword focused/>
                        <InputPassword error/>
                    </View>
                    <View>
                        <ConvertInput value="0.00"/>
                        <ConvertInput error value="0.00"/>
                        <Label className="forms-label bt-address-label">
                            <Text className="label-text">Bitcoin Address</Text>
                            <Input type="text" className="input-empty bt-address" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" />
                            <Image className="currency-logo" src="./../../assets/multibit/img/bitcoin-icon.png" alt="Bitcoin" />
                        </Label>

                        <Checkbox>
                            Checkbox text
                        </Checkbox>
                    </View>
                </Card>
            </Container>
        )
    }
}


export default InputsContainer;