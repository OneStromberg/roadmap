import React from 'react';
import {Card, Component, Label, ViewColor, View} from 'components';

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

