import React from 'react';
import { Component, Header, Label, View } from 'components';
import Button from './../../partials/Button';
import Dropdown from './../../partials/Dropdown';

class HelpHeader extends Component {
    render() {
        return (
            <Header>
                <View className="upbar">
                    <Label>Help</Label>
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
        );
    }
}

export default HelpHeader;