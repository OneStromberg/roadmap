import React from 'react';
import { Component, View } from 'components';

import HistoryHeader from './HistoryHeader';
import HistoryBody from './HistoryBody';

class History extends Component {
    render() {
        return (
            <View>
                <HistoryHeader />
                <HistoryBody />
            </View>       
        );
    }
}

export default History;