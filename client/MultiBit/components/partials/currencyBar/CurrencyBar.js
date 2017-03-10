import React from 'react';
import { Component, View } from 'components';
import SideBar from './sideBar';

const menuItemsArray = [
	{src: "assets/img/multibit-icon-with-border.png", title: "Bitcoin", value: "0.2311 BTC"},
	{src: "assets/img/ethereum-icon@2x.png", title: "Ethereum", value: "0.2311 ETH"},
	{src: "assets/img/dogoin-icon@2x.png", title: "Dogcoin", value: "0.2311 DSC"}
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