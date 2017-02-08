import React from 'react';
import { Card, Component, Header, Image } from 'components';

class CardImage extends Component {
    render(){
        return(
            <Card>
                <Header>Image</Header>
                <Image />
            </Card>
        )
    }
}

export default CardImage;