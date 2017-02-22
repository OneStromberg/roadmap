import React from 'react';
import {Card, Component, Label, Input, Title, View} from 'components';

class TypographyCard extends Component {
    render(){
        return(
            <Card className="typography-card">
                {this.props.children}
            </Card>
        )
    }
}

export default TypographyCard;
