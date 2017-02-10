import React from 'react';
import {Component, Label, ViewColor, View} from 'components';

class GradientPaletteCard extends Component {
    render(){
        return(
            <View className={"gradient-palette-card"}>
                <ViewColor background={`linear-gradient(147deg, ${this.props.background[0]} 0%, ${this.props.background[1]} 100%)`} />
                <Label>{this.props.background[0]}</Label>
                <Label>{this.props.background[1]}</Label>
            </View>
        )
    }
}

export default GradientPaletteCard;