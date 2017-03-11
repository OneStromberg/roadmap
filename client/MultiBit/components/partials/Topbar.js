import React from 'react';
import { Component, Label, Text, Title, View, Header } from 'components';
import Button from './Button';

class Topbar extends Component {
    render() {
        return (
            <Header className="topbar-container">
                <View className={this.props.className}>
                    {this.props.children}
                </View>
            </Header>
        );
    }
}

export default Topbar;



