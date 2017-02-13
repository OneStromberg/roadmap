import React from 'react';
import {Component, Label, ViewColor, View} from 'components';

class ColorPaletteCard extends Component {
    render(){
        return(
            <View className="color-palette-card">
                <ViewColor background={this.props.background[0]} />
                <Label>{this.props.background[0]}</Label>
            </View>
        )
    }
}

export default ColorPaletteCard;

