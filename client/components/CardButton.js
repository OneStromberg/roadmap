import React from 'react';
import { Card, Component, Header, Button } from 'components';

class CardButton extends Component {
    render(){
        return(
            <Card>
                <Header>Button</Header>
                <Button> Button </Button>
                <Button primary> Button </Button>
                <Button default> Button </Button>
                <Button secondary> Button </Button>
                <Button danger> Button </Button>
                <Button text> Button </Button>
                <Button link> Button </Button>
            </Card>
        )
    }
}

export default CardButton;