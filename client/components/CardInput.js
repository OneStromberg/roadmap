import React from 'react';
import { Card, Component, Header, Input } from 'components';

class CardInput extends Component {
    render(){
        return(
            <Card>
                <Header>Input</Header>
                <Input />  
            </Card>
        )
    }
} 

export default CardInput;