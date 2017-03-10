import React from 'react';
import { Component, View } from 'components';
import SidebarMenu from './SidebarMenu';

const menuItemsArray = [
	{src: "./../../../..", title: "Bitcoin"},
	{src: "./../../assets/multibit/img/transact.svg", title: "Ethereum"},
	{src: "./../../assets/multibit/img/exchange.svg", title: "Dogcoin"}
];

class SubSidebar extends Component {
    render() {
        return (
            <View>
                <SidebarMenu menuItemsArray={menuItemsArray} />
            </View>
        );
    }
}

export default SubSidebar;