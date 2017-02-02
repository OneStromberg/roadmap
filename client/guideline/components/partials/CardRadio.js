import React from 'react';
import {Card, Component, Header, Radio } from 'components';

class CardRadio extends Component {
    render(){
        return(
            <Card>
                <Header>Radio</Header>
                <Radio radioButtonGroup />
                <Radio radioButtonGroup />
                <Radio radioButtonGroup />
                <Radio radioButtonGroup />
                <Radio radioButtonGroup />
                <Radio radioButtonGroup />
            </Card>
        )
    }
}

export default CardRadio;