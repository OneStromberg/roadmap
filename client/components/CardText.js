import React from 'react';
import { Card, Component, Header, Text } from 'components';

class CardText extends Component {
    render(){
        return(
            <Card>
                <Header>Text</Header>
                <Text className="uk-text-lead">Text</Text>
                <Text className="uk-text-meta">Text</Text>
                <Text className="uk-text-primary">Text</Text>
                <Text className="uk-text-success">Text</Text>
                <Text className="uk-text-warning">Text</Text>
                <Text className="uk-text-danger">Text</Text>
            </Card>
        )
    }
}

export default CardText;