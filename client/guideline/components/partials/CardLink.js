import React from 'react';
import { Card, Component, Header, Link, View, List, ListItem } from 'components';

class CardLink extends Component {
    render(){
        return(
            <Card>
                <Header>Link</Header>
                <List>
                <ListItem>
                    <Header>Default</Header>
                    <Link href="https://facebook.github.io/react-native/docs/getting-started.html"> LINK </Link>
                </ListItem>
                <ListItem>
                    <Header>Muted</Header>
                    <Link className="uk-link-muted" href="https://facebook.github.io/react-native/docs/getting-started.html"> LINK </Link>
                </ListItem>
                <ListItem>
                    <Header>Reset</Header>
                    <Link className="uk-link-reset" href="https://facebook.github.io/react-native/docs/getting-started.html"> LINK </Link>
                </ListItem>    
                </List> 
            </Card>
        )
    }
}

export default CardLink;