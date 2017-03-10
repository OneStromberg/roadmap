import React, { Component } from 'react';
import { Component, Header, Label, View, Section } from 'components';
import Button from './../../partials/Button';
import CurrencyInfo from './../../partials/CurrencyInfo';
import Sidebar from './../../partials/Sidebar';
import SubSidebar from './../../partials/SubSubsidebar';

class AppWindowBody extends Component {
    render() {
        return (
            <Section className="app-window-section">
                <View className="app-window-section-sidebar-container">
                    <SubSidebar currency={}/>
                </View>
                <View className="currency-info-container">
                    <View  className="currency-info">
                        <CurrencyInfo />
                    </View>
                    <View className="currency-info-button">
                        <Button default>Send</Button>
                        <Button default>Receive</Button>
                    </View>
                </View>
            </Section>
        );
    }
}

export default AppWindowBody;