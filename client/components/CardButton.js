import React from 'react';
import { Card, Component, Header, Button } from 'components';

class CardButton extends Component {
    render(){
        return(
            <Card>
                <Header>Button</Header>
                <Button> Button </Button>
                <Button className=" uk-button-primary"> Button </Button>
                <Button className=" uk-button-default"> Button </Button>
                <Button className=" uk-button-secondary"> Button </Button>
                <Button className=" uk-button-danger"> Button </Button>
                <Button className=" uk-button-text"> Button </Button>
                <Button className=" uk-button-link"> Button </Button>
            </Card>
        )
    }
}

export default CardButton;