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
            <Page>
                <Sidebar />
                <View>
                    <Header>
                        <View>
                            <Label />
                        </View>
                        <View>
                            <Button />
                            <Button />
                        </View>
                        <View>
                            <Dropdown list={[]} />
                            <Dropdown list={[]} />
                        </View>
                    </Header>
                    <Section>
                        <List>
                            <ListItem><Button /></ListItem>
                            <ListItem><Button /></ListItem>
                            <ListItem><Button /></ListItem>
                        </List>
                        <View>
                            <CurrencyInfo />
                            <View>
                                <Button />
                                <Button />
                            </View>
                        </View>
                    </Section>
                </View>
            </Page>          
        );
    }
}

export default AppWindow;