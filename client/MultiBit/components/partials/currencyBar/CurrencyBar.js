import React from 'react';
import { Component, View } from 'components';
import SideBar from './sideBar';

const menuItemsArray = [
	{src: "./../../../../../public/assets/img/multibit-icon-with-border.png", title: "Bitcoin", value: ""},
	{src: "./../../../../../public/assets/img/ethereum-icon@2x.png", title: "Ethereum", value: ""},
	{src: "./../../../../../public/assets/img/dogoin-icon@2x.png", title: "Dogcoin", value: ""}
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