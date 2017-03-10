import React from 'react';
import { Component, View } from 'components';

import SettingsHeader from './SettingsHeader';
import SettingsBody from './SettingsBody';

class Settings extends Component {
    render() {
        return (
            <View>
                <SettingsHeader />
                <SettingsBody />
            </View>       
        );
    }
}

export default Settings;