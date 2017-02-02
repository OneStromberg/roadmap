import React from 'react';
import { Card, Component, Header, Label, View } from 'components';

class CardLabel extends Component {
    render(){
        return(
            <Card>
                <Header>Label</Header>
                <Label> Label </Label>
                <Label className="uk-label-success"> Success </Label>
                <Label className="uk-label-warning"> Warning </Label>
                <Label className="uk-label-danger"> Danger</Label>
            </Card>
        )
    }
}

export default CardLabel;