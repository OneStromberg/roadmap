import React from 'react';
import { Card, Component, Header } from 'components';

class CardHeader extends Component {
    render(){
        return(
            <Card>
                <Header>{this.props.children}</Header>
            </Card>
        )
    }
}

export default CardHeader;