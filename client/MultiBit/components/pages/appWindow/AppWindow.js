import React from 'react';
import { Component, View } from 'components';

import Page from './../../../../common/components/Page';
import AppWindowHeader from './AppWindowHeader';
import AppWindowBody from './AppWindowBody';

class AppWindow extends Component {
    render() {
        return (
            <Page className="app-window-container">
                <Sidebar src="./assets//img/multibit-lg@2x.png"/>
                <View>
                    <AppWindowHeader />
                    <AppWindowBody />
                </View>
            </Page>          
        );
    }
}

export default AppWindow;