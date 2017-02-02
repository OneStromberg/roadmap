import React from 'react';
import { Card, Component, Divider, Header } from 'components';

class CardDivider extends Component {
    render(){
        return(
            <Card>
                <Header>Divider</Header>
                <Divider />
            </Card>
        )
    }
}

export default CardDivider;