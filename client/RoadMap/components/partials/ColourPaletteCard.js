import React from 'react';
import {Component, Label, View} from 'components';

class ColourPaletteCard extends Component {
    render(){
        return(
            <View className={this.getClassName(this.props)  + "colour-palette-card "}>
                <View colour={this.props.colour}>Random</View>
                <Label>{this.props.colour}</Label>
            </View>
        )
    }
}

export default ColourPaletteCard;