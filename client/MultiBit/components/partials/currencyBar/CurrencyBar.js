import React from 'react';
import { Component, View } from 'components';
import SideBar from './sideBar';

const menuItemsArray = [
	{src: "./../../../..", title: "Bitcoin"},
	{src: "./../../assets/multibit/img/transact.svg", title: "Ethereum"},
	{src: "./../../assets/multibit/img/exchange.svg", title: "Dogcoin"}
];

class CurrencyBar extends Component {
    render() {
        return (
            <View className="app-window-section-sidebar-container">
                <View>
                    <SideBar menuItemsArray={menuItemsArray} />
                </View>
            </View>
        );
    }
}

export default CurrencyBar;