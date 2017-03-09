import React from 'react';
import { Component, Header, Label, List, ListItem, Section, View } from 'components';
import Button from './../../partials/Button';
import CurrencyInfo from './../../partials/CurrencyInfo';
import Dropdown from './../../partials/Dropdown';
import Page from './../../../../common/components/Page';
import Sidebar from './../../partials/Sidebar';

class AppWindow extends Component {
    render() {
        return (
            <Page className="app-window-container">
                <Sidebar />
                <View>
                    <Header>
                        <View className="upbar">
                            <Label>Transact</Label>
                            <View className="header-right-button-block">
                                <Button notification />
                                <Button keepkey>KeepKey On</Button>
                            </View>
                        </View>
                        <View className="subbar">
                            <View className="header-dropdown-block">
                                <Dropdown className="dropdown-simple" title="Sort by Name" list={[]} />
                                <Dropdown className="dropdown-secondary" title="Asset control" list={[]} />
                            </View>
                            <Button asset>Add new asset</Button>
                        </View>
                    </Header>
                    <Section className="app-window-section">
                        <View className="app-window-section-list">
                            <List>
                                <ListItem><Button>Bitcoin</Button></ListItem>
                                <ListItem><Button>Ethereum</Button></ListItem>
                                <ListItem><Button>Dogcoin</Button></ListItem>
                            </List>
                        </View>
                        <View>
                            <View  className="currency-info">
                                <CurrencyInfo />
                            </View>
                            <View className="currency-info-button">
                                <Button>Send</Button>
                                <Button>Receive</Button>
                            </View>
                        </View>
                    </Section>
                </View>
            </Page>          
        );
    }
}

export default AppWindow;