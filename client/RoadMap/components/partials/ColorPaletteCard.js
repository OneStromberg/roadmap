import React from 'react';
import {Component, Label, ViewColor, View} from 'components';

class ColorPaletteCard extends Component {
    render(){
        console.log(this.props);
        return(
            <View className={this.getClassName(this.props)  + "color-palette-card "}>
                <ViewColor colors={this.props.colors} />
                <Label>{this.props.colors[0]}</Label>
            </View>
        )
    }
}

export default ColorPaletteCard;