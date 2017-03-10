import React from 'react';
import { Component, View } from 'components';

import TransactHeader from './TransactHeader';
import TransactBody from './TransactBody';

class Transact extends Component {
    render() {
        return (
            <View  className="overview">
                <TransactHeader />
                <TransactBody />
            </View>       
        );
    }
}

export default Transact;