import React from 'react';
import {Component, Label, ViewColor, View} from 'components';

class ColourPaletteCard extends Component {
    render(){
        console.log(this.props);
        return(
            <View className={this.getClassName(this.props)  + "color-palette-card "}>
                <ViewColor colour={this.props.colour} />
                <Label>{this.props.colour}</Label>
            </View>
        )
    }
}

export default ColourPaletteCard;