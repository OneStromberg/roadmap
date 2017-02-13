import React from 'react';
import {Card, Component, Input, View} from 'components';

class TypographyCard extends Component {
    render(){
        return(
            <Card className="typography-card">
                {this.props.title}
                <Label>font size: {this.props.fontSize}</Label>
                <Label>color: {this.props.color}</Label>
                <Label>line-height: {this.props.lineHeight}</Label>
                <Label>font-weight: {this.props.fontWeight}</Label>
            </Card>
        )
    }
}

export default TypographyCard;