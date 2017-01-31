import React from 'react';
import { Card, Component, Label, List, ListItem, View } from 'components';

class CardList extends Component {
    render(){
        return(
            <Card>
                <Label> List Header</Label>
                <List>
                    <ListItem>List Item 1</ListItem>
                    <ListItem>List Item 2</ListItem>
                    <ListItem>List Item 3</ListItem>
                    <ListItem>List Item 4</ListItem>
                </List>    
            </Card>
        )
    }
}

export default CardList;