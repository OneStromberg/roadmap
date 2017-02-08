import React from 'react';
import {Card, Component, Header, ImageButton} from 'components';

class CardImageButton extends Component {
    render(){
        return(
            <Card>
                <Header>Image Button</Header>
                <ImageButton />
            </Card>
        )
    }
}

export default CardImageButton;