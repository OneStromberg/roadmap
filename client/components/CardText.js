import React from 'react';
import { Card, Component, Header, Text } from 'components';

class CardText extends Component {
    render(){
        return(
            <Card>
                <Header>Text</Header>
                <Text lead>Text</Text>
                <Text meta>Text</Text>
                <Text primary>Text</Text>
                <Text success>Text</Text>
                <Text warning>Text</Text>
                <Text danger>Text</Text>
            </Card>
        )
    }
}

export default CardText;