import React from 'react';
import { Component, View } from 'components';

import OverviewHeader from './OverviewHeader';
import OverviewBody from './OverviewBody';

class Overview extends Component {
    render() {
        return (
            <View>
                <OverviewHeader />
                <OverviewBody />
            </View>       
        );
    }
}

export default Overview;