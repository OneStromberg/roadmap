import React from 'react';
import { Component, Label, Text, Title, View, Header } from 'components';
import Button from './Button';

class Topbar extends Component {
    render() {
        return (
            <Header className={"topbar-container " + this.props.className}>
                <View className="topbar-round-buttons-container">
                    <Button className="topbar-round-buttons close" />
                    <Button className="topbar-round-buttons minify" />
                    <Button className="topbar-round-buttons expand" />
                </View>
                <View>
                    <Title className="topbar-title">Multibit</Title>
                </View>
            </Header>
        );
    }
}

export default Topbar;


