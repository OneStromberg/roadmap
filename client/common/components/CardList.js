import React from 'react';
import { Card, Component, Header, List, ListItem, View } from 'components';

class CardList extends Component {
    render(){
        return(
            <Card>
                <Header> List Header</Header>
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