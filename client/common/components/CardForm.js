import React from 'react';
import {Card, Component, Header, Checkbox, Input, Radio} from 'components';

class CardForm extends Component {
    render(){
        return(
            <Card>
                <Header>Form</Header>
                <Radio />
                <Checkbox />
                <Input />
            </Card>
        )
    }
}

export default CardForm;