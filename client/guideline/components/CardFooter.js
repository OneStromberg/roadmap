import React from 'react';
import { Card, Component, Header, Footer } from 'components';

class CardFooter extends Component {
    render(){
        return(
            <Card>
                <Header>Footer</Header>
                <Footer />
            </Card>
        )
    }
}

export default CardFooter;