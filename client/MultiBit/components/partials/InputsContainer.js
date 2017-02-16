import React from 'react';
import {Component, View, Container, Header, Text, Title, Card} from 'components';
import Button from './Button';

class ButtonsContainer extends Component {
    render(){
        return(
            <Container>
                <Header>
                    <Text>04</Text>
                    <Text> Inputs forms</Text>
                </Header>
                <Card className="inputs-container">
                    <Button primary>Login</Button>
                    <Button secondary>Save</Button>
                    <Button default>Send</Button>
                    <Button help>?</Button>
                    <Button pin></Button>
                    <Button asset>Add new asset</Button>
                    <Button back>Back</Button>
                    <Button keepkey className=" keepkey-on">KeepKey On</Button>
                    <Button keepkey className=" keepkey-off">KeepKey Off</Button>
                    <Button notification></Button>
                    <Button notification className=" has-notification"></Button>
                    <Button retry>Retry again</Button>
                </Card>
            </Container>
        )
    }
}


export default ButtonsContainer;