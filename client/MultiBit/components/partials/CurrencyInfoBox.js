import React from 'react';
import { Component, Image, Label, View } from 'components';

class CurrencyInfoBox extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image src=""/>
                </View>
                <View>
                    <Label>{this.props.data[0]}</Label>
                </View>
                <View>
                    <Label>{this.props.data[1]}</Label>
                </View>
                <View>
                    <Label>{this.props.data[2]}</Label>
                </View>
            </View>
        );
    }
}

export default CurrencyInfoBox;