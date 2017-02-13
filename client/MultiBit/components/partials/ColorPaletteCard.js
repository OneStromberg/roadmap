import React from 'react';
import {Component, Label, ViewColor, View, Card} from 'components';

class ColorPaletteCard extends Component {
    render(){
        return(
            <Card className="color-palette-card">
                <ViewColor background={this.props.background[0]} />
                <Label>{this.props.background[0]}</Label>
            </Card>
        )
    }
}

export default ColorPaletteCard;

