import React from 'react';
import { Card, Component, Header, Text, List, ListItem } from 'components';

class CardText extends Component {
    render(){
        return(
            <Card>
                <Header>Text</Header>
                <List>
                    <ListItem>
                        <Header>Lead</Header>
                        <Text lead> TEXT </Text>
                    </ListItem>
                    <ListItem>
                        <Header>Meta</Header>
                        <Text meta> TEXT </Text>
                    </ListItem>
                    <ListItem>
                        <Header>Primary</Header>
                        <Text primary> TEXT </Text>
                    </ListItem>
                    <ListItem>
                        <Header>Success</Header>
                        <Text success> TEXT </Text>
                    </ListItem>
                    <ListItem>
                        <Header>Warning</Header>
                        <Text warning> TEXT </Text>
                    </ListItem>
                    <ListItem>
                        <Header>Danger</Header>
                        <Text danger> TEXT </Text>
                    </ListItem>
                </List>
            </Card>
        )
    }
}

export default CardText;