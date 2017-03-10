import React from 'react';
import { Component, View, Button } from 'components';
import CurrencyInfoBox from './CurrencyInfoBox';

class CurrencyInfo extends Component {
    render() {
        return (
            <View className="currency-info-container">
                <View  className="currency-info">
                    <CurrencyInfoBox data={["Bitcoin Assets", "0.00347 BTC", "$ 200.78 USD"]}/>
                </View>
                <View className="currency-info-button">
                    <Button default>Send</Button>
                    <Button default>Receive</Button>
                </View>
            </View>
        );
    }
}

export default CurrencyInfo;