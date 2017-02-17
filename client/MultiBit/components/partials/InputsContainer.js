import React from 'react';
import {Component, Container, View, Header, Text, Title, Card, Label, Input, InputValidate, ButtonLink, Image} from 'components';

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
                            <Input type="text" className="input-empty" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" /> 
                        </Label>
                        <Label className="forms-label"> 
                            <Text className="label-text">Send To</Text>
                            <Input type="text" className="input-empty focused" checked placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" /> 
                        </Label>
                        <Label className="forms-label"> 
                            <Text className="label-text">Send To</Text>
                            <InputValidate type="text" className="input-error" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" />
                        </Label>

                        <Label className="forms-label"> 
                            <Input type="password" className="input-empty" placeholder="password" /> 
                            <ButtonLink className="restore-button">Restore?</ButtonLink>
                        </Label>
                        <Label className="forms-label">
                            <Input type="password" className="input-empty focused" placeholder="password" />
                            <ButtonLink className="restore-button">Restore?</ButtonLink>
                        </Label>
                        <Label className="forms-label">
                            <InputValidate type="password" className="input-error" placeholder="password" />
                            <ButtonLink className="restore-button">Restore?</ButtonLink>
                        </Label>
                    </View>
                    <View>
                        <Label className="forms-label"> 
                            <Text className="in-currency">BTC</Text>
                            <Input type="text" className="input-empty input-exchange" value="0.00" />
                            <View>
                                <Text className="input-exchange-out">0.00</Text>
                                <Text className="out-currency">USD</Text>
                            </View>
                        </Label>
                        <Label className="forms-label"> 
                            <Text className="in-currency">BTC</Text>
                            <Input type="text" className="input-empty input-exchange input-error" value="0.00" />
                            <View>
                                <Text className="input-exchange-out">0.00</Text>
                                <Text className="out-currency">USD</Text>
                            </View>
                        </Label>
                        <Label className="forms-label bt-address-label">
                            <Text className="label-text">Bitcoin Address</Text>
                            <Input type="text" className="input-empty bt-address" placeholder="16mQwTg668qZDzZdzJRRwRkLfJLjbC6a5f" />
                            <Image className="currency-logo" src="./../../assets/multibit/img/bitcoin-icon.png" alt="Bitcoin" />
                        </Label>
                    </View>
                </Card>
            </Container>
        )
    }
}


export default InputsContainer;