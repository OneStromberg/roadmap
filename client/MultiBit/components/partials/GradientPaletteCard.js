import React from 'react';
import {Component, Label, ViewColor, View, Card} from 'components';

class GradientPaletteCard extends Component {
    render(){
        return(
            <Card className={"gradient-palette-card"}>
                <ViewColor background={`linear-gradient(147deg, ${this.props.background[0]} 0%, ${this.props.background[1]} 100%)`} />
                <Label className={"gradient-palette-label"}>{this.props.background[0]}</Label>
                <Label className={"gradient-palette-label"}>{this.props.background[1]}</Label>
            </Card>
        )
    }
}

export default GradientPaletteCard;