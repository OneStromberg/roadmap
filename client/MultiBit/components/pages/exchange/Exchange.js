import React from 'react';
import { Component, View } from 'components';

import ExchangeHeader from './ExchangeHeader';
import ExchangeBody from './ExchangeBody';

class Exchange extends Component {
    render() {
        return (
            <View>
                <ExchangeHeader />
                <ExchangeBody />
            </View>       
        );
    }
}

export default Exchange;