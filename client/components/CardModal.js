import React from 'react';
import {Card, Component, Header, Modal} from 'components';

class CardModal extends Component {
    render(){
        return(
            <Card>
                <Header>Modal</Header>
                <Modal />
            </Card>
        )
    }
}

export default CardModal;