import React from 'react';
import { Component, View } from 'components';

import HelpHeader from './HelpHeader';
import HelpBody from './HelpBody';

class Help extends Component {
    render() {
        return (
            <View>
                <HelpHeader />
                <HelpBody />
            </View>       
        );
    }
}

export default Help;