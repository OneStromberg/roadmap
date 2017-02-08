import React from 'react';
import { Card, Component, Header, Label, View, List, ListItem } from 'components';

class CardLabel extends Component {
    render(){
        return(
            <Card>
                <Header>Label</Header>
                <List>
                    <ListItem>
                        <Header>Label</Header>
                        <Label> Label </Label>
                    </ListItem>
                    <ListItem>
                        <Header>Success</Header>
                        <Label className="uk-label-success"> Label </Label>
                    </ListItem>
                    <ListItem>
                        <Header>Warning</Header>
                        <Label className="uk-label-warning"> Label </Label>
                    </ListItem>
                    <ListItem>
                        <Header>Danger</Header>
                        <Label className="uk-label-danger"> Label </Label>
                    </ListItem>
                </List>
            </Card>
        )
    }
}

export default CardLabel;