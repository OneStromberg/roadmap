import React from 'react';
import { Component, Image, Label, View } from 'components';

class CurrencyInfo extends Component {
    render() {
        return (
            <View>
                <View>
                    <Image src="/assets/img/bitcoin-icon.png"/>
                </View>
                <View>
                    <Label>Bitcoin Assets</Label>
                </View>
                <View>
                    <Label>0.00347 BTC</Label>
                </View>
                <View>
                    <Label>$ 200.78 USD</Label>
                </View>
            </View>
        );
    }
}

export default CurrencyInfo;