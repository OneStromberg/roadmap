import React from 'react';
import { Card, Component, Header, Button, List, ListItem, Label, Text } from 'components';

class CardButton extends Component {
    render(){
        return(
            <Card>
                <Header>Button</Header>
                <List>
                    <ListItem>
                        <Header> Button </Header>
                        <Button>Button</Button>                        
                    </ListItem>
                    <ListItem>
                        <Header> Primary </Header>
                        <Button primary>Button</Button>                        
                    </ListItem>
                    <ListItem>
                        <Header>Default</Header>
                        <Button default>Button</Button>                    
                    </ListItem>
                    <ListItem>
                        <Header>Secondary</Header>
                        <Button secondary>Button</Button>                        
                    </ListItem>
                    <ListItem>
                        <Header>Danger</Header>
                        <Button danger>Button</Button>                        
                    </ListItem>
                    <ListItem>
                        <Header>Text</Header>
                        <Button text>Button</Button>                        
                    </ListItem>
                    <ListItem>
                        <Header>Link</Header>
                        <Button link>Button</Button>                        
                    </ListItem>
                </List>
            </Card>
        )
    }
}

export default CardButton;