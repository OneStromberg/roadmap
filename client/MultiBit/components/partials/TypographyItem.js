import React from 'react';
import {View, Component, Label} from 'components';

class TypographyItem extends Component {
    render(){
        return(
            <View className="typography-item">
                {this.props.title}
                <Label>{this.props.fontFamily}, Size {this.props.fontSize}, Character {this.props.letterSpacing}, Color {this.props.color}</Label>
            </View>
        )
    }
}

export default TypographyItem;